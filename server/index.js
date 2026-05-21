require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => res.json({ status: 'ok', firm: 'LEGAL POWER FIRM' }));

// ── Contact Form ──────────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, company, service, message } = req.body;

  if (!email || !message || !firstName) {
    return res.status(400).json({ success: false, error: 'Required fields missing.' });
  }

  try {
    // Configure transporter — update with your SMTP settings in .env
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   || 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT)  || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from:    `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to:      process.env.FIRM_EMAIL || 'info@legalpowerfirm.cm',
      subject: `New Consultation Request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <div style="background:#0a1628;padding:30px;text-align:center">
            <h2 style="color:#c5a43e;margin:0">LEGAL POWER FIRM</h2>
            <p style="color:rgba(255,255,255,.6);font-size:12px;margin:5px 0 0">New Consultation Request</p>
          </div>
          <div style="padding:30px;background:#f7f6f1">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:700;width:140px;color:#0a1628">Name:</td><td style="padding:8px 0">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700;color:#0a1628">Email:</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:700;color:#0a1628">Phone:</td><td style="padding:8px 0">${phone || '—'}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700;color:#0a1628">Company:</td><td style="padding:8px 0">${company || '—'}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700;color:#0a1628">Service:</td><td style="padding:8px 0">${service || '—'}</td></tr>
            </table>
            <hr style="border:1px solid #e5e2da;margin:20px 0"/>
            <h3 style="color:#0a1628;margin:0 0 12px">Message</h3>
            <p style="color:#555;line-height:1.7;white-space:pre-wrap">${message}</p>
          </div>
          <div style="background:#0a1628;padding:15px;text-align:center">
            <p style="color:rgba(255,255,255,.4);font-size:11px;margin:0">© ${new Date().getFullYear()} LEGAL POWER FIRM — Yaoundé, Cameroon</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Your message has been sent. We will respond within one business day.' });

  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(500).json({ success: false, error: 'Unable to send message. Please call us directly.' });
  }
});

app.listen(PORT, () => console.log(`🏛️  LEGAL POWER FIRM API running on http://localhost:${PORT}`));
