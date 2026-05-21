import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';

const strengths = [
  ['fas fa-globe-africa','OHADA Law Expertise','Deep understanding of the OHADA framework governing 17 African countries, combined with mastery of Cameroon\'s Common Law and Civil Law systems.'],
  ['fas fa-language','Bilingual Legal Services','Fully fluent in English and French, enabling us to serve both local and international clients navigating Cameroon\'s unique bilingual legal landscape.'],
  ['fas fa-lightbulb','Commercial Awareness','Commercially practical and solution-oriented advice that is cost-effective, innovative, and aligned with our clients\' business objectives.'],
  ['fas fa-bolt','Responsive Service','Efficient, responsive, and client-focused service delivery that ensures you receive timely legal support when you need it most.'],
  ['fas fa-award','Dispute Resolution Excellence','Strong track record in resolving complex disputes and handling high-value transactions across multiple African jurisdictions.'],
  ['fas fa-shield-alt','Ethics & Integrity','Unwavering commitment to professionalism, confidentiality, and integrity in all our client relationships and legal dealings.'],
];

const industries = [
  'Consumer Goods & Retail','Energy & Infrastructure','Financial Institutions','Healthcare & Life Sciences',
  'Hotels, Tourism & Hospitality','Manufacturing & Transport','Real Estate & Construction',
  'Technology, Media & Telecom','Shipping & Maritime','Private Equity & Investment','Mining & Commodities','Agribusiness',
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageBanner title="About" highlight="Our Firm" />

      {/* Story */}
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
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">Committed to <span>Legal Excellence</span> in Africa</h2>
              <div className="divider" />
              {[
                'At LEGAL POWER FIRM, we are committed to delivering strategic, practical, and results-driven legal solutions tailored to the evolving needs of businesses, institutions, investors, and individuals operating in Cameroon and across Africa.',
                'Founded by our Senior Managing Partner, ANGOH JACOB ANGOH, the firm has built a strong reputation for excellence in legal and advisory services, successfully handling complex transactions, regulatory matters, disputes, and multi-jurisdictional projects.',
                'Based in Cameroon, LEGAL POWER FIRM operates within the OHADA legal framework — the unified business law system governing 17 African countries. Our unique bilingual and bi-jural competence allows us to effectively advise both local and international clients.',
              ].map((p, i) => <p key={i} style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '18px' }}>{p}</p>)}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" style={{ paddingLeft: 0 }}>Our Purpose</span>
            <h2 className="section-title">Vision &amp; <span>Mission</span></h2>
            <div className="divider" />
          </div>
          <div className="grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
            <Reveal>
              <div style={{ background: 'var(--navy)', borderRadius: '4px', padding: '50px 45px' }}>
                <div style={{ width: '55px', height: '55px', background: 'rgba(197,164,62,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  <i className="fas fa-eye" style={{ fontSize: '22px', color: 'var(--gold)' }} />
                </div>
                <h3 style={{ fontSize: '26px', color: 'var(--white)', marginBottom: '16px' }}>Our <span style={{ color: 'var(--gold)' }}>Vision</span></h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.7)', lineHeight: 1.85, fontStyle: 'italic' }}>&ldquo;To be a trusted and leading African law firm recognized for excellence, integrity, innovation, and client-focused legal solutions.&rdquo;</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ background: 'var(--gold)', borderRadius: '4px', padding: '50px 45px' }}>
                <div style={{ width: '55px', height: '55px', background: 'rgba(10,22,40,.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  <i className="fas fa-bullseye" style={{ fontSize: '22px', color: 'var(--navy)' }} />
                </div>
                <h3 style={{ fontSize: '26px', color: 'var(--navy)', marginBottom: '16px' }}>Our Mission</h3>
                <p style={{ fontSize: '15px', color: 'rgba(10,22,40,.75)', lineHeight: 1.85, fontStyle: 'italic' }}>&ldquo;To provide exceptional legal and advisory services that protect our clients&rsquo; interests, support sustainable business growth, and facilitate successful investments and commercial operations across Africa.&rdquo;</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" style={{ paddingLeft: 0 }}>Our Strengths</span>
            <h2 className="section-title">Why Clients <span>Choose Us</span></h2>
            <div className="divider" />
          </div>
          <div className="grid-3">
            {strengths.map(([icon, title, desc], i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <div className="service-card" style={{ textAlign: 'center' }}>
                  <div className="sc-icon" style={{ margin: '0 auto 20px' }}><i className={icon} /></div>
                  <div className="sc-title">{title}</div>
                  <p className="sc-desc">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="stats-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '50px' }}>
            <span className="section-tag" style={{ paddingLeft: 0, color: 'rgba(255,255,255,.7)' }}>Sectors</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Industries <span>We Serve</span></h2>
            <div className="divider" style={{ margin: '18px auto 0' }} />
          </div>
          <div className="grid-4" style={{ gap: '18px' }}>
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={(i % 4) * 0.1}>
                <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)', borderRadius: '4px', padding: '22px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)' }}>{ind}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Your Legal Partner Across Africa</h2>
          <p>Whether you&rsquo;re establishing a business, investing in Africa, or seeking expert legal guidance — we are ready.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-navy">Get in Touch <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            <Link to="/services" className="btn btn-white-o">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
