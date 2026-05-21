import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { FAQS } from '../data/faqs';
import { FIRM } from '../data/config';

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <div className="faq-q" onClick={onToggle} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onToggle()}>
        {q}
        <div className="faq-ic"><i className="fas fa-plus" /></div>
      </div>
      <div className="faq-a">
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);
  const left  = FAQS.slice(0, 6);
  const right = FAQS.slice(6);

  return (
    <>
      <PageBanner title="Frequently Asked" highlight="Questions" crumb="FAQ" />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '80px', alignItems: 'start' }}>
            {/* Left column */}
            <div>
              <div className="section-header">
                <span className="section-tag">Got Questions?</span>
                <h2 className="section-title">General <span>Questions</span></h2>
                <div className="divider" />
              </div>
              {left.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openIdx === i} onToggle={() => toggle(i)} />
              ))}
            </div>

            {/* Right column */}
            <div>
              <div className="section-header">
                <span className="section-tag">Services &amp; Fees</span>
                <h2 className="section-title">Services &amp; <span>Fees</span></h2>
                <div className="divider" />
              </div>
              {right.map((faq, i) => {
                const idx = i + 6;
                return <FAQItem key={idx} q={faq.q} a={faq.a} isOpen={openIdx === idx} onToggle={() => toggle(idx)} />;
              })}

              {/* Contact card */}
              <div style={{ background: 'var(--navy)', borderRadius: '4px', padding: '35px', marginTop: '30px' }}>
                <h3 style={{ color: 'var(--white)', fontSize: '20px', marginBottom: '10px' }}>Still Have Questions?</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.6)', lineHeight: 1.75, marginBottom: '22px' }}>
                  Our team is ready to answer any legal questions and provide the guidance you need.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <a href={`tel:${FIRM.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'rgba(255,255,255,.7)' }}>
                    <span style={{ width: '34px', height: '34px', background: 'rgba(197,164,62,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}><i className="fas fa-phone" /></span>
                    {FIRM.phone}
                  </a>
                  <a href={`mailto:${FIRM.email}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'rgba(255,255,255,.7)' }}>
                    <span style={{ width: '34px', height: '34px', background: 'rgba(197,164,62,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)' }}><i className="fas fa-envelope" /></span>
                    {FIRM.email}
                  </a>
                </div>
                <Link to="/contact" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Us a Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Didn&rsquo;t Find Your Answer?</h2>
          <p>Contact our team directly for personalised legal guidance tailored to your specific situation.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-navy">Contact Us <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            <a href={`tel:${FIRM.phone}`} className="btn btn-white-o"><i className="fas fa-phone" /> Call Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
