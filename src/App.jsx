import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import LinksSection from './components/LinksSection';
import AboutSection from './components/AboutSection';
import MediaKitSection from './components/MediaKitSection';
import ContactSection from './components/ContactSection';
import { Menu, X } from 'lucide-react';

const SECTIONS = ['hero', 'links', 'about', 'mediakit', 'contact'];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const observers = SECTIONS.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      observer.observe(el);
      return observer;
    }).filter(Boolean);
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-background text-text font-sans">

      {/* ── Sidebar ──────────────────────────────────────────────── */}
      <Sidebar
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* ── Mobile Top Bar ───────────────────────────────────────── */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 border-b border-white/5"
        style={{ background: 'rgba(8,12,20,0.95)', backdropFilter: 'blur(20px)' }}
      >
        <a href="#hero" className="font-display text-lg font-black">
          CARTER<span className="text-blue-400">PCs</span>
        </a>
        <button
          onClick={() => setMobileOpen(v => !v)}
          className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main
        className="flex-1 lg:ml-72 min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #080c14 0%, #0a0f1c 50%, #080c14 100%)',
        }}
      >
        {/* Top padding on mobile for the fixed bar */}
        <div className="pt-14 lg:pt-0">
          <HeroSection />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mx-8" />

          <LinksSection />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mx-8" />

          <AboutSection />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mx-8" />

          <MediaKitSection />

          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mx-8" />

          <ContactSection />

          {/* Footer */}
          <footer className="py-10 px-8 border-t border-white/5 text-center">
            <p className="text-xs text-slate-700">
              &copy; {new Date().getFullYear()} Carter Smith · Managed by{' '}
              <a href="mailto:carterpcs@rakugomedia.com" className="text-slate-600 hover:text-slate-400 transition-colors">
                Rakugo Media
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
