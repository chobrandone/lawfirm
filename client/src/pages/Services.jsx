import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { SERVICES } from '../data/services';

export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageBanner title="Our" highlight="Practice Areas" crumb="Services" />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" style={{ paddingLeft: 0 }}>What We Do</span>
            <h2 className="section-title">Comprehensive <span>Legal &amp; Advisory Services</span></h2>
            <div className="divider" />
            <p className="section-sub">LEGAL POWER FIRM provides expert legal counsel across a broad spectrum of practice areas, delivering innovative and commercially sound solutions for clients throughout Cameroon and across Africa.</p>
          </div>
        </div>
      </section>

      <section className="section section-bg" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="service-card">
                  <div className="sc-icon"><i className={s.icon} /></div>
                  <div className="sc-title">{s.title}</div>
                  <p className="sc-desc">{s.desc}</p>
                  <Link to="/contact" className="sc-link">Consult now <i className="fas fa-arrow-right" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Expert Legal Counsel?</h2>
          <p>Schedule a confidential consultation with our experienced legal team today.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-navy">Book a Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            <a href="tel:+237653332269" className="btn btn-white-o"><i className="fas fa-phone" /> Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
