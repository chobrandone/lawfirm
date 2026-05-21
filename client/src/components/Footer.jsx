import { Link } from 'react-router-dom';
import { FIRM } from '../data/config';

const quickLinks = [
  ['/','Home'],['/about','About Us'],['/services','Practice Areas'],
  ['/team','Our Team'],['/faq','FAQ'],['/contact','Contact'],
];

const practiceLinks = [
  'Corporate & Commercial Law','Mergers & Acquisitions',
  'Real Estate & Property','Dispute Resolution',
  'Labour & Employment','Maritime & Shipping',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          {/* About column */}
          <div>
            <Link to="/" className="logo">
              <span className="logo-name">LEGAL <em>POWER</em> FIRM</span>
              <span className="logo-sub">Attorneys &amp; Counselors at Law</span>
            </Link>
            <p className="footer-desc">
              Strategic, practical, and results-driven legal solutions for businesses,
              institutions, investors, and individuals across Cameroon and Africa.
            </p>
            <div className="ft-social">
              <a href={FIRM.linkedin}  target="_blank" rel="noopener"><i className="fab fa-linkedin" /></a>
              <a href={FIRM.twitter}   target="_blank" rel="noopener"><i className="fab fa-twitter" /></a>
              <a href={FIRM.facebook}  target="_blank" rel="noopener"><i className="fab fa-facebook-f" /></a>
              <a href={FIRM.instagram} target="_blank" rel="noopener"><i className="fab fa-instagram" /></a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="ft-title">Quick Links</h4>
            <ul className="ft-links">
              {quickLinks.map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="ft-title">Practice Areas</h4>
            <ul className="ft-links">
              {practiceLinks.map(p => (
                <li key={p}><Link to="/services">{p}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="ft-title">Contact Us</h4>
            <div className="ft-contact-item"><i className="fas fa-map-marker-alt ft-ci" /><span>{FIRM.address}</span></div>
            <div className="ft-contact-item"><i className="fas fa-phone ft-ci" /><span>{FIRM.phone}</span></div>
            <div className="ft-contact-item"><i className="fas fa-envelope ft-ci" /><span>{FIRM.email}</span></div>
            <div className="ft-contact-item"><i className="fas fa-clock ft-ci" /><span>{FIRM.hours}</span></div>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LEGAL POWER FIRM. All rights reserved.</p>
          <p>Excellence in Legal Practice &mdash; Cameroon &amp; Africa</p>
        </div>
      </div>
    </footer>
  );
}
