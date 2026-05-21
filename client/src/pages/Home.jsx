import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { HOME_SERVICES } from '../data/services';
import { TEAM, TESTIMONIALS } from '../data/team';
import { useCounter } from '../hooks/useReveal';
import Reveal from '../components/Reveal';

// ── Stat counter widget ───────────────────────────────────────────────────────
function StatItem({ target, suffix, label }) {
  const [ref, val] = useCounter(target, suffix);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-num">{val}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// ── Testimonial slider ────────────────────────────────────────────────────────
function TestiSlider() {
  const [cur, setCur] = useState(0);
  const trackRef = useRef(null);
  const total = Math.ceil(TESTIMONIALS.length / 2);

  const goTo = (idx) => {
    const n = ((idx % total) + total) % total;
    setCur(n);
    if (trackRef.current) {
      const w = trackRef.current.children[0]?.offsetWidth + 28 || 0;
      trackRef.current.style.transform = `translateX(-${n * w * 2}px)`;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(cur + 1), 5500);
    return () => clearInterval(timer);
  }, [cur]);

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div className="testi-track" ref={trackRef}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-quote">&ldquo;</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-av">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-co">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testi-dots">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} className={`testi-dot${cur === i ? ' active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}

// ── Home page ─────────────────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-balance-scale" /> OHADA | Cameroon | Africa
            </div>
            <h1>Strategic Legal Solutions<em>For Business &amp; Beyond</em></h1>
            <p className="hero-desc">
              LEGAL POWER FIRM delivers results-driven legal counsel for businesses, investors, and
              institutions operating across Cameroon and 17 OHADA member nations in Africa.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-gold">
                Our Practice Areas
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/contact" className="btn btn-white-o">Book Consultation</Link>
            </div>
            <div className="hero-stats">
              {[['500','+','Cases Handled'],['17','','OHADA Nations'],['200','+','Clients Served'],['15','+','Years Experience']].map(([n, s, l]) => (
                <div key={l}>
                  <div className="hero-stat-n"><span data-count={n} data-suffix={s}>{n}{s}</span></div>
                  <div className="hero-stat-l">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES BAR ─────────────────────────────────────────────────── */}
      <div className="features-bar">
        <div className="container">
          <div className="features-grid">
            {[
              ['fas fa-shield-alt',   'Trusted Representation', 'Bilingual English & French legal services'],
              ['fas fa-globe-africa', 'Pan-African Reach',      'Coverage across 17 OHADA countries'],
              ['fas fa-handshake',    'Commercial Awareness',   'Practical, business-focused legal advice'],
              ['fas fa-lock',         'Confidential & Ethical', 'Highest standards of professional integrity'],
            ].map(([icon, title, sub]) => (
              <div key={title} className="feature-item">
                <div className="feature-icon"><i className={icon} /></div>
                <div><div className="feature-title">{title}</div><div className="feature-sub">{sub}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT PREVIEW ────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <Reveal direction="left">
              <div className="about-visual">
                <div className="about-card"><span className="about-card-icon"><i className="fas fa-balance-scale" /></span></div>
                <div className="about-badge"><div className="about-badge-n">15+</div><div className="about-badge-t">Years of<br/>Excellence</div></div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="about-side">
                <span className="section-tag">About Our Firm</span>
                <h2 className="section-title">Your Trusted <span>Legal Partner</span> Across Africa</h2>
                <div className="divider" />
                <p className="section-sub">
                  At LEGAL POWER FIRM, we deliver strategic, practical, and results-driven legal solutions
                  for businesses, institutions, investors, and individuals operating in Cameroon and across Africa.
                </p>
                <div className="about-points">
                  {[
                    ['fas fa-gavel',       'OHADA Expertise',     'Deep knowledge of the unified African business law framework.'],
                    ['fas fa-language',    'Bilingual Services',  'Full legal counsel in both English and French.'],
                    ['fas fa-chart-line',  'Commercial Focus',    'Commercially sound advice that creates value.'],
                    ['fas fa-globe-africa','Cross-Border Capacity','Multi-jurisdictional expertise across Africa.'],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="about-point">
                      <div className="ap-icon"><i className={icon} /></div>
                      <div><div className="ap-title">{title}</div><div className="ap-desc">{desc}</div></div>
                    </div>
                  ))}
                </div>
                <div className="about-sig">
                  <div className="sig-avatar">AJ</div>
                  <div><div className="sig-name">Angoh Jacob Angoh</div><div className="sig-role">Senior Managing Partner</div></div>
                  <Link to="/about" className="btn btn-gold" style={{ marginLeft: 'auto' }}>
                    Learn More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────────────────── */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" style={{ paddingLeft: 0 }}>Practice Areas</span>
            <h2 className="section-title">Comprehensive <span>Legal Services</span></h2>
            <div className="divider" />
            <p className="section-sub">Expert legal counsel across a wide spectrum of practice areas, serving clients throughout Cameroon and the African continent.</p>
          </div>
          <div className="grid-3">
            {HOME_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="service-card">
                  <div className="sc-icon"><i className={s.icon} /></div>
                  <div className="sc-title">{s.title}</div>
                  <p className="sc-desc">{s.desc}</p>
                  <Link to="/services" className="sc-link">Learn more <i className="fas fa-arrow-right" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/services" className="btn btn-navy">
              View All Practice Areas <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="stats-section">
        <div className="container">
          <div className="grid-4">
            <StatItem target={500} suffix="+" label="Cases Successfully Handled" />
            <StatItem target={200} suffix="+" label="Satisfied Clients" />
            <StatItem target={17}  suffix=""  label="OHADA Nations Covered" />
            <StatItem target={15}  suffix="+" label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <Reveal direction="left">
              <div className="why-box">
                <h3>Why Clients <span>Choose Us</span></h3>
                <p className="why-box-sub">Trusted by startups, multinationals, and institutions across Africa.</p>
                <div className="why-list">
                  {[
                    ['OHADA Business Law Expertise',  'Deep knowledge of the framework governing 17 African countries.'],
                    ['Bilingual Legal Services',       'Full capacity in English and French for local and international clients.'],
                    ['Solution-Oriented Advice',       'Commercially practical counsel that minimizes risk and creates value.'],
                    ['Cross-Border Capability',        'Regional insight and strong professional networks across Africa.'],
                    ['Integrity & Confidentiality',    'Unwavering commitment to professional ethics and client privacy.'],
                  ].map(([t, d]) => (
                    <div key={t} className="why-item">
                      <div className="why-icon"><i className="fas fa-check-circle" /></div>
                      <div><div className="why-t">{t}</div><div className="why-d">{d}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="why-side">
                <span className="section-tag">Industries We Serve</span>
                <h2 className="section-title">Diverse <span>Sector Experience</span></h2>
                <div className="divider" />
                <p className="section-sub">Our clients operate across a wide range of industries throughout Cameroon and the African continent.</p>
                <div className="industries">
                  {['Consumer Goods & Retail','Energy & Infrastructure','Financial Institutions','Healthcare & Life Sciences','Hotels & Tourism','Mining & Commodities','Manufacturing & Transport','Real Estate & Construction','Technology & Telecom','Private Equity & Investment','Shipping & Maritime','Agribusiness'].map(ind => (
                    <div key={ind} className="ind-tag">{ind}</div>
                  ))}
                </div>
                <Link to="/about" className="btn btn-gold" style={{ marginTop: '28px' }}>
                  Our Full Story <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ─────────────────────────────────────────────────── */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" style={{ paddingLeft: 0 }}>Our People</span>
            <h2 className="section-title">Meet Our <span>Legal Team</span></h2>
            <div className="divider" />
          </div>
          <div className="grid-3">
            {TEAM.slice(0, 3).map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="team-card">
                  <div className="team-img">
                    <div className="team-initials-bg">{m.initials}</div>
                    <div className="team-avatar" style={i > 0 ? { background: 'var(--navy-light)', color: 'var(--gold)' } : {}}>
                      {i === 0 ? m.initials : <i className="fas fa-user-tie" style={{ fontSize: '38px' }} />}
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
          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <Link to="/team" className="btn btn-navy">
              Meet the Full Team <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" style={{ paddingLeft: 0 }}>Client Voices</span>
            <h2 className="section-title">What Our <span>Clients Say</span></h2>
            <div className="divider" />
          </div>
          <TestiSlider />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Expert Legal Support?</h2>
          <p>Contact us today for a confidential consultation. Our team is ready to assist you across Cameroon and Africa.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-navy">
              Book a Consultation <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="tel:+237653332269" className="btn btn-white-o">
              <i className="fas fa-phone" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
