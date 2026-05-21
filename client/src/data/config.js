// ── Firm Configuration ─────────────────────────────────────────────────────
// Update these values to match your firm's details

export const FIRM = {
  name:      'LEGAL POWER FIRM',
  tagline:   'Attorneys & Counselors at Law',
  email:     'info@legalpowerfirm.cm',
  phone:     '+237 653 332 269',
  whatsapp:  '237653332269',
  address:   'Yaoundé, Cameroon',
  hours:     'Mon – Fri: 8:00 AM – 6:00 PM',
  linkedin:  '#',
  twitter:   '#',
  facebook:  '#',
  instagram: '#',
};

export const WA_URL = `https://wa.me/${FIRM.whatsapp}?text=${encodeURIComponent('Hello, I would like to inquire about your legal services.')}`;

// API base URL — in production point to your Node.js server
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
