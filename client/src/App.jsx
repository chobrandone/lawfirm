import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollTop     from './components/ScrollTop';
import Home          from './pages/Home';
import About         from './pages/About';
import Services      from './pages/Services';
import Team          from './pages/Team';
import FAQ           from './pages/FAQ';
import Contact       from './pages/Contact';

// Scroll to top on every route change
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollReset />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/services" element={<Services />} />
          <Route path="/team"     element={<Team />}     />
          <Route path="/faq"      element={<FAQ />}      />
          <Route path="/contact"  element={<Contact />}  />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollTop />
    </HashRouter>
  );
}
