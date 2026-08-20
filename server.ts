import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy Gemini client helper
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString(), service: 'On-Site Electronics (OSE, INC)' });
  });

  // AI Feature 2: Smart Service Triage API
  app.post('/api/ai/triage', async (req, res) => {
    const { issueText } = req.body;
    if (!issueText || typeof issueText !== 'string') {
      return res.status(400).json({ error: 'Please provide issueText' });
    }

    try {
      const ai = getGeminiClient();
      if (ai) {
        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: `You are an expert IT service triage assistant for On-Site Electronics (OSE, INC), an established IT and computer repair company since 1985 in Boxford, MA.
Analyze this user's technology issue: "${issueText}"

Classify into:
1. category: Choose one of ["Computer Support", "Apple / Mac Support", "Data Recovery", "IT Security & Audits", "Disaster Recovery", "Network & Cabling", "Firewall & Server Installation", "Remote Technical Support"]
2. priority: Choose one of ["Low", "Medium", "High", "Critical (24/7 Emergency)"]
3. suggestedNextStep: A concise 1-2 sentence recommendation for what OSE will do and what the customer should do next.
4. urgencyReason: Brief reason why this priority was assigned.
5. is247EmergencyCandidate: boolean whether this warrants calling 978-887-6900 immediately.

Respond strictly in valid JSON format with keys: category, priority, suggestedNextStep, urgencyReason, is247EmergencyCandidate.`,
          config: {
            responseMimeType: 'application/json',
          },
        });

        const text = response.text || '';
        try {
          const parsed = JSON.parse(text);
          return res.json({ success: true, triage: parsed });
        } catch {
          // fall through to heuristic
        }
      }
    } catch (err) {
      console.warn('Gemini triage fallback due to:', err);
    }

    // Smart heuristic fallback
    const lower = issueText.toLowerCase();
    let category = 'Computer Support';
    let priority = 'Medium';
    let suggestedNextStep = 'Schedule standard diagnostic and repair with an On-Site Electronics specialist.';
    let urgencyReason = 'Standard technical inquiry.';
    let is247EmergencyCandidate = false;

    if (lower.includes('mac') || lower.includes('apple') || lower.includes('macbook') || lower.includes('imac')) {
      category = 'Apple / Mac Support';
      suggestedNextStep = 'Book Apple hardware or macOS diagnostics with our certified technicians.';
    } else if (lower.includes('lost') || lower.includes('deleted') || lower.includes('data') || lower.includes('recovery') || lower.includes('hard drive clicked') || lower.includes('drive')) {
      category = 'Data Recovery';
      priority = 'High';
      suggestedNextStep = 'Power off the drive immediately to prevent further magnetic degradation and bring to OSE for clean data extraction.';
      urgencyReason = 'Active data degradation risk.';
    } else if (lower.includes('server') || lower.includes('exchange') || lower.includes('domain') || lower.includes('raid')) {
      category = 'Firewall & Server Installation';
      priority = 'High';
      suggestedNextStep = 'Dispatch our senior systems engineer for server infrastructure review.';
    } else if (lower.includes('hacked') || lower.includes('ransomware') || lower.includes('virus') || lower.includes('security') || lower.includes('breach')) {
      category = 'IT Security & Audits';
      priority = 'Critical (24/7 Emergency)';
      suggestedNextStep = 'Disconnect affected machines from network and call our 24/7 hotline (978-887-6900) immediately.';
      urgencyReason = 'Active security containment required.';
      is247EmergencyCandidate = true;
    } else if (lower.includes('cable') || lower.includes('fiber') || lower.includes('cat-6') || lower.includes('cat-7') || lower.includes('switch') || lower.includes('wifi') || lower.includes('network')) {
      category = 'Network & Cabling';
      suggestedNextStep = 'Schedule an on-site network infrastructure survey and cabling estimate.';
    } else if (lower.includes('urgent') || lower.includes('down') || lower.includes('emergency') || lower.includes('can\'t work')) {
      priority = 'High';
      is247EmergencyCandidate = true;
      suggestedNextStep = 'Contact our 24/7 priority line at 978-887-6900 for immediate response.';
    }

    return res.json({
      success: true,
      triage: {
        category,
        priority,
        suggestedNextStep,
        urgencyReason,
        is247EmergencyCandidate,
      },
    });
  });

  // AI Feature 1: Ask OSE Service Assistant API
  app.post('/api/ai/assistant', async (req, res) => {
    const { messages, userContext } = req.body;

    try {
      const ai = getGeminiClient();
      if (ai && Array.isArray(messages) && messages.length > 0) {
        const conversationHistory = messages
          .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Customer' : 'OSE Assistant'}: ${m.content}`)
          .join('\n');

        const systemInstruction = `You are the On-Site Electronics (OSE, INC) Service Navigator AI.
Company facts:
- Name: On-Site Electronics (OSE, INC / On-Site Electronics, INC)
- Founded: 1985 (40+ years in business)
- Location: 37 Georgetown Rd, Boxford, MA 01921
- Phone: 978-887-6900 (24/7 Service available)
- Email: ose@oseusa.com
- Services:
  * Consumer: PC/Laptop Repair ($120), All-in-One PCs ($169), Non-RAID Servers ($179), RAID Servers ($209), Apple iMac ($169), iMac >27" ($179), MacBook ($169), MacBook Air ($169).
  * Small Business: IT Security Audits, Disaster Recovery, Data Recovery, Microsoft Exchange & Domain Controllers, Firewall Installation, Network Infrastructure (Cat-6, Cat-7, Fiber-optic cabling, switches, patch panels).
  * Remote Technical Support & On-Site dispatch.
  * Reseller for Toshiba, HP, Microsoft, SonicWall, Dell, APC, WatchGuard, Seagate, Seagate Recovery Services, Apple.

Tone: Approachable, highly experienced, professional, helpful.
Keep responses concise (2-4 sentences or structured bullet points).
If you have gathered enough details, recommend the specific OSE service, mention whether 24/7 support is appropriate, and offer to connect them to 978-887-6900 or schedule service.
State clearly that AI estimates provide helpful guidance and a specialist will confirm final diagnostics.`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: `Conversation so far:\n${conversationHistory}\n\nPlease generate the next helpful response to assist the customer.`,
          config: {
            systemInstruction,
          },
        });

        return res.json({
          success: true,
          reply: response.text || 'We can certainly help you with that! Would you like to schedule an on-site visit or speak directly with a technician at 978-887-6900?',
        });
      }
    } catch (err) {
      console.warn('Gemini assistant fallback:', err);
    }

    // Rule-based conversational fallback
    const lastUserMsg = (messages && messages[messages.length - 1]?.content) || '';
    const lower = lastUserMsg.toLowerCase();

    let reply = "Thanks for contacting On-Site Electronics. Since 1985, our specialists have solved tough technology challenges. Could you tell me if this is for a home device or a business network, and what operating system (Windows, Mac, or Linux/Server) you're using?";

    if (lower.includes('mac') || lower.includes('apple')) {
      reply = "Our technicians specialize in Apple hardware and macOS repairs (MacBook, MacBook Air, iMac, and Mac Mini). We handle display issues, logic board diagnostics, liquid damage cleanup, and macOS upgrades. Would you like to book a service or request a quote?";
    } else if (lower.includes('slow') || lower.includes('won\'t turn on') || lower.includes('screen') || lower.includes('virus')) {
      reply = "That sounds like a hardware or operating system issue. We offer comprehensive diagnostic and repair services starting at $120 for standard PCs/laptops. Would you prefer to bring it in, request on-site dispatch, or try remote diagnostics?";
    } else if (lower.includes('business') || lower.includes('server') || lower.includes('cabling') || lower.includes('security')) {
      reply = "For small businesses, we provide end-to-end IT infrastructure, Cat-6/Cat-7/Fiber cabling, firewall installation, Exchange/Domain Controllers, and IT security audits. You can reach our commercial line 24/7 at 978-887-6900 or request an on-site survey.";
    } else if (lower.includes('data') || lower.includes('lost') || lower.includes('drive') || lower.includes('backup')) {
      reply = "We offer specialized Data Recovery in partnership with Seagate Recovery Services for hard drives, SSDs, RAID arrays, and flash media. Please power off the affected storage device and contact us immediately at 978-887-6900 to maximize recovery success.";
    }

    return res.json({
      success: true,
      reply,
    });
  });

  // Contact / Quote submission endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, serviceType, message, triageData } = req.body;
    console.log('New Service Request Received:', {
      name,
      email,
      phone,
      subject,
      serviceType,
      message,
      triageData,
      receivedAt: new Date().toISOString(),
    });

    res.json({
      success: true,
      message: 'Thanks — we’ve received your request. An On-Site Electronics specialist will contact you shortly.',
      referenceId: `OSE-${Date.now().toString().slice(-6)}`,
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`On-Site Electronics Server running on http://localhost:${PORT}`);
  });
}

startServer();
