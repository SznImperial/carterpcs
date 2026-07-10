import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContentPillarsSection from './components/ContentPillarsSection';
import MediaKitSection from './components/MediaKitSection';
import ContactSection from './components/ContactSection';
import { Menu, X } from 'lucide-react';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home',      href: '#hero' },
    { name: 'About',     href: '#about' },
    { name: 'Content',   href: '#pillars' },
    { name: 'Media Kit', href: '#mediakit' },
    { name: 'Contact',   href: '#contact' },
  ];

  return (
    <div className="w-full min-h-screen bg-background text-text font-sans">

      {/* ── Navigation ─────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 border-b border-white/5'
            : 'py-5'
        }`}
        style={{
          background: isScrolled
            ? 'rgba(8, 12, 20, 0.88)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-blue-400 text-sm font-black">C</span>
            </div>
            <span className="font-display text-xl font-black tracking-tight">
              CARTER<span className="text-blue-400">PCs</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-primary py-2.5 text-sm">
              Work With Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: 'rgba(8, 12, 20, 0.97)', backdropFilter: 'blur(20px)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-1 border-t border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 btn-primary text-sm justify-center"
            >
              Work With Me
            </a>
          </div>
        </div>
      </nav>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main>
        <HeroSection />
        <AboutSection />
        <ContentPillarsSection />
        <MediaKitSection />
        <ContactSection />
      </main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="relative border-t border-white/5 py-16 overflow-hidden" style={{ background: '#060a12' }}>
        <div className="orb w-[400px] h-[200px] bg-blue-600 top-0 left-1/2 -translate-x-1/2 opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="#hero" className="font-display text-2xl font-black">
                CARTER<span className="text-blue-400">PCs</span>
              </a>
              <p className="text-sm text-slate-600">Making tech less of a snooze fest.</p>
            </div>

            {/* Nav */}
            <div className="flex gap-6 flex-wrap justify-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm text-slate-600 hover:text-slate-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social mini icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-500 hover:text-white transition-all">
                <FaTiktok size={16} />
              </a>
              <a href="#" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-500 hover:text-white transition-all">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-slate-700">
              &copy; {new Date().getFullYear()} Carter Smith. All rights reserved. · Managed by Rakugo Media
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
