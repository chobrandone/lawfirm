import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { TEAM } from '../data/team';

export default function Team() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [featured, ...associates] = TEAM;

  return (
    <>
      <PageBanner title="Our" highlight="Legal Team" />

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" style={{ paddingLeft: 0 }}>Our People</span>
            <h2 className="section-title">Meet the <span>Attorneys</span></h2>
            <div className="divider" />
            <p className="section-sub">Our team combines deep legal expertise with commercial insight and a genuine commitment to our clients&rsquo; success across Cameroon and the broader African market.</p>
          </div>
        </div>
      </section>

      <section className="section section-bg" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Featured Partner */}
          <div className="grid-2" style={{ gap: '60px', marginBottom: '60px' }}>
            <Reveal direction="left">
              <div style={{ background: 'linear-gradient(135deg,rgba(10,22,40,0.72) 0%,rgba(30,48,96,0.60) 100%),url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80) center/cover no-repeat', borderRadius: '4px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', fontFamily: "'Playfair Display',serif", fontSize: '160px', color: 'rgba(197,164,62,.1)', fontWeight: 700 }}>AJA</div>
                <div style={{ width: '130px', height: '130px', borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display',serif", fontSize: '48px', fontWeight: 700, color: 'var(--navy)', zIndex: 1 }}>AJ</div>
              </div>
            </Reveal>
            <Reveal direction="right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-block', background: 'var(--gold-bg)', border: '1px solid rgba(197,164,62,.3)', color: 'var(--gold)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '2px', marginBottom: '20px' }}>Senior Managing Partner</div>
              <h2 className="section-title" style={{ fontSize: '36px' }}>Angoh Jacob <span>Angoh</span></h2>
              <div className="divider" />
              {[
                'ANGOH JACOB ANGOH is the Founder and Senior Managing Partner of LEGAL POWER FIRM. He leads the firm\'s legal and advisory practice with extensive expertise in OHADA business law, corporate transactions, and cross-border dispute resolution across Africa.',
                'Under his leadership, LEGAL POWER FIRM has successfully handled complex multi-jurisdictional transactions, regulatory matters, and high-value disputes for clients across diverse sectors — from financial institutions and real estate developers to multinational corporations and government entities.',
                'His bilingual capacity in English and French, combined with his deep understanding of both Common Law and Civil Law systems, positions him uniquely to advise clients on cross-border legal matters throughout the African continent.',
              ].map((p, i) => <p key={i} style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '16px' }}>{p}</p>)}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '30px' }}>
                {featured.specialties.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-mid)' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--gold)' }} /> {s}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-gold">
                Consult with Him <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </Reveal>
          </div>

          {/* Associates */}
          <div className="section-header center" style={{ marginTop: '40px' }}>
            <span className="section-tag" style={{ paddingLeft: 0 }}>Our Associates</span>
            <h2 className="section-title">Additional <span>Legal Counsel</span></h2>
            <div className="divider" />
          </div>
          <div className="grid-4">
            {associates.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="team-card">
                  <div className="team-img">
                    <div className="team-initials-bg">{m.initials}</div>
                    <div className="team-avatar" style={{ background: 'var(--navy-light)', color: 'var(--gold)' }}>
                      <i className="fas fa-user-tie" style={{ fontSize: '38px' }} />
                    </div>
                    <div className="team-overlay">
                      <a href={`mailto:${m.email}`} className="tsb"><i className="fas fa-envelope" /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <div className="team-name">{m.name}</div>
                    <div className="team-role">{m.role}</div>
                    <p className="team-bio">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Work with Our Expert Legal Team</h2>
          <p>Schedule a confidential consultation and let us guide you through your legal challenges.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-navy">Book a Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            <a href="tel:+237653332269" className="btn btn-white-o"><i className="fas fa-phone" /> Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
