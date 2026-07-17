import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.28, rootMargin: '-10% 0px -35% 0px' }
      );
      observer.observe(el);
      return observer;
    }).filter(Boolean);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="flex min-h-screen bg-background text-text font-sans">
      <Sidebar
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 mobile-bar">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight">
          CARTER<span className="text-primary">PCs</span>
        </a>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors duration-200"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <main className="flex-1 lg:ml-72 min-h-screen main-canvas">
        <div className="pt-14 lg:pt-0">
          <HeroSection />

          <div className="section-divider" />
          <LinksSection />

          <div className="section-divider" />
          <AboutSection />

          <div className="section-divider" />
          <MediaKitSection />

          <div className="section-divider" />
          <ContactSection />

          <footer className="py-10 px-8 border-t border-white/[0.04] text-center">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Carter Smith · Managed by{' '}
              <a
                href="mailto:carterpcs@rakugomedia.com"
                className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
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
