import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { FIRM, WA_URL, API_BASE } from '../data/config';

const SERVICE_OPTIONS = [
  'Agribusiness','Administrative & Regulatory Compliance','Business & Commercial Advisory',
  'Corporate & Commercial Law','Company Formation & Structuring','Mergers & Acquisitions',
  'Contract Drafting & Review','Debt Recovery & Asset Recovery','Due Diligence',
  'Fintech & Digital Finance','Global Mobility & Immigration','Intellectual Property',
  'Labour & Employment Law','Litigation & Dispute Resolution','Maritime & Shipping Law',
  'Mining, Oil & Gas','Natural Resources & Environmental','Real Estate & Property Law',
  'Other / General Enquiry',
];

const INITIAL = { firstName:'', lastName:'', email:'', phone:'', company:'', service:'', message:'', consent: false };

export default function Contact() {
  const [form,    setForm]   = useState(INITIAL);
  const [status,  setStatus] = useState({ type:'', msg:'' }); // type: 'success'|'error'|'loading'
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const onChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: '' });
    try {
      const { data } = await axios.post(`${API_BASE}/api/contact`, form);
      if (data.success) {
        setStatus({ type: 'success', msg: data.message || 'Message sent! We\'ll respond within one business day.' });
        setForm(INITIAL);
      } else {
        setStatus({ type: 'error', msg: data.error || 'Unable to send. Please call us directly.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Unable to send. Please call us or WhatsApp directly.' });
    }
  };

  return (
    <>
      <PageBanner title="Contact" highlight="Our Firm" />

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Info side */}
            <Reveal direction="left">
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">We Are <span>Ready to Help</span></h2>
              <div className="divider" />
              <p className="section-sub" style={{ marginBottom: '35px' }}>
                Whether you need legal advice, want to schedule a consultation, or have a general enquiry — our team is ready to assist.
              </p>

              {[
                ['fas fa-map-marker-alt', 'Our Office',        FIRM.address],
                ['fas fa-phone-alt',      'Phone & WhatsApp',  FIRM.phone],
                ['fas fa-envelope',       'Email Address',     FIRM.email],
                ['fas fa-clock',          'Working Hours',     FIRM.hours],
              ].map(([icon, label, val]) => (
                <div key={label} className="info-card">
                  <div className="info-icon"><i className={icon} /></div>
                  <div><div className="info-label">{label}</div><div className="info-val">{val}</div></div>
                </div>
              ))}

              <a href={WA_URL} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#25D366', color: '#fff', padding: '18px 24px', borderRadius: '4px', marginTop: '10px', textDecoration: 'none' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '28px', height: '28px', flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: '12px', opacity: .8 }}>Quick response — usually within 1 hour</div>
                </div>
                <i className="fas fa-arrow-right" style={{ marginLeft: 'auto' }} />
              </a>
            </Reveal>

            {/* Form side */}
            <Reveal direction="right">
              <div className="form-card">
                <h3>Request a Consultation</h3>
                <p>Fill in the form below and our team will respond within one business day.</p>
                <form onSubmit={onSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group"><label>First Name *</label><input name="firstName" value={form.firstName} onChange={onChange} placeholder="Your first name" required /></div>
                    <div className="form-group"><label>Last Name *</label><input name="lastName"  value={form.lastName}  onChange={onChange} placeholder="Your last name"  required /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Email Address *</label><input type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required /></div>
                    <div className="form-group"><label>Phone / WhatsApp</label><input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+237 XXX XXX XXX" /></div>
                  </div>
                  <div className="form-group"><label>Company / Organisation</label><input name="company" value={form.company} onChange={onChange} placeholder="Your company name (optional)" /></div>
                  <div className="form-group">
                    <label>Area of Legal Interest *</label>
                    <select name="service" value={form.service} onChange={onChange} required>
                      <option value="" disabled>Select a practice area</option>
                      {SERVICE_OPTIONS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea name="message" value={form.message} onChange={onChange} placeholder="Please describe your legal matter. All information is treated with strict confidentiality." required />
                  </div>
                  <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
                    <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} required style={{ width: 'auto', marginTop: '4px', accentColor: 'var(--gold)' }} />
                    <label style={{ fontSize: '12px', color: 'var(--text-light)', textTransform: 'none', letterSpacing: 0, fontWeight: 400, lineHeight: 1.6 }}>I consent to LEGAL POWER FIRM processing my personal information to respond to this enquiry.</label>
                  </div>

                  {status.msg && (
                    <div style={{ marginBottom: '18px', padding: '14px', borderRadius: '4px', fontSize: '14px', fontWeight: 600, background: status.type === 'success' ? '#d4edda' : '#f8d7da', color: status.type === 'success' ? '#155724' : '#721c24', border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}` }}>
                      {status.msg}
                    </div>
                  )}

                  <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '16px' }} disabled={status.type === 'loading'}>
                    {status.type === 'loading'
                      ? <><i className="fas fa-spinner fa-spin" /> Sending…</>
                      : <>Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></>
                    }
                  </button>
                </form>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
