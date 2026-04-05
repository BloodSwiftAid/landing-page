import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Droplet, 
  Menu, 
  X, 
  Globe, 
  TrendingUp, 
  MapPin, 
  Sun, 
  Moon 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import logo from './assets/logo.png';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Join from './pages/Join';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className={`glass-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <Link to="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
           <img src={logo} alt="SwiftAid" style={{ height: '45px', width: 'auto' }} />
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '40px', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" style={{ color: location.pathname === '/' ? 'var(--accent)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
          <Link to="/about" style={{ color: location.pathname === '/about' ? 'var(--accent)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>About</Link>
          <Link to="/contact" style={{ color: location.pathname === '/contact' ? 'var(--accent)' : 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>Contact</Link>
          <button 
            onClick={toggleTheme} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/join" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: '50px' }}>Join Network</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-primary)', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            cursor: 'pointer'
          }} 
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ 
              position: 'absolute', 
              top: '100%', 
              left: 0, 
              width: '100%', 
              background: theme === 'dark' ? 'rgba(2, 26, 30, 0.98)' : 'rgba(255, 255, 255, 0.98)', 
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              borderBottom: '1px solid var(--glass-border)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Link to="/" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Contact</Link>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', padding: '1rem', background: 'var(--glass)', borderRadius: '12px' }}>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Switch Appearance</span>
              <button 
                onClick={toggleTheme} 
                style={{ background: 'var(--accent)', border: 'none', cursor: 'pointer', color: 'white', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center' }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <Link to="/join" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem' }}>Join Network</Link>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .glass-nav { height: 80px; transition: all 0.3s ease; }
        .nav-scrolled { height: 70px; }
      `}</style>
    </nav>
  );
};

const Footer = () => (
  <footer style={{ padding: '6rem 0 3rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'var(--bg-darker)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
        <div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <img src={logo} alt="SwiftAid" style={{ height: '40px', width: 'auto' }} />
           </div>
           <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
             Swift coordination and intelligence platform connecting Nigeria's healthcare providers to verified blood sources.
           </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '2rem', color: 'var(--accent)' }}>Menu</h4>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></li>
            <li><Link to="/join" style={{ color: 'inherit', textDecoration: 'none' }}>Join Network</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '2rem', color: 'var(--accent)' }}>Location</h4>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', color: 'var(--text-secondary)' }}>
             <li style={{ display: 'flex', gap: '10px' }}><MapPin size={20} /> Lagos, Nigeria</li>
             <li style={{ display: 'flex', gap: '10px' }}><MapPin size={20} /> Ibadan, Nigeria</li>
          </ul>
        </div>

      </div>
      <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} SwiftAid Healthcare Technologies. v1.0 Launch.
        </p>
      </div>
    </div>
  </footer>
);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
