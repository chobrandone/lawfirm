import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FIRM } from '../data/config';

const links = [
  { to: '/',        label: 'Home'     },
  { to: '/about',   label: 'About'    },
  { to: '/services',label: 'Services' },
  { to: '/team',    label: 'Team'     },
  { to: '/faq',     label: 'FAQ'      },
  { to: '/contact', label: 'Contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  const handleLinkClick = () => setOpen(false);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      {/* Top bar */}
      <div className="header-top">
        <div className="container">
          <div className="ht-info">
            <a href={`mailto:${FIRM.email}`}><i className="fas fa-envelope" /> {FIRM.email}</a>
            <a href={`tel:${FIRM.phone}`}><i className="fas fa-phone" /> {FIRM.phone}</a>
            <span><i className="fas fa-map-marker-alt" /> {FIRM.address}</span>
          </div>
          <div className="ht-social">
            <a href={FIRM.linkedin} target="_blank" rel="noopener"><i className="fab fa-linkedin" /></a>
            <a href={FIRM.twitter}  target="_blank" rel="noopener"><i className="fab fa-twitter" /></a>
            <a href={FIRM.facebook} target="_blank" rel="noopener"><i className="fab fa-facebook-f" /></a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <span className="logo-name">LEGAL <em>POWER</em> FIRM</span>
            <span className="logo-sub">Attorneys &amp; Counselors at Law</span>
          </Link>

          <nav className={`nav${open ? ' open' : ''}`} role="navigation">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={handleLinkClick}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className="nav-cta" onClick={handleLinkClick}>
              Free Consultation
            </Link>
          </nav>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span style={open ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
            <span style={open ? { opacity: 0 } : {}} />
            <span style={open ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
          </button>
        </div>
      </div>
    </header>
  );
}
