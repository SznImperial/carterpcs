import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaYoutube, FaXTwitter, FaTiktok } from 'react-icons/fa6';

const navLinks = [
  { name: 'Home',      href: '#hero',     icon: '⌂' },
  { name: 'Links',     href: '#links',    icon: '🔗' },
  { name: 'About',     href: '#about',    icon: '👤' },
  { name: 'Media Kit', href: '#mediakit', icon: '📊' },
  { name: 'Contact',   href: '#contact',  icon: '✉' },
];

const socials = [
  { Icon: FaTiktok,    href: 'https://tiktok.com/@carterpcs',   label: 'TikTok',    color: '#ff0050' },
  { Icon: FaYoutube,   href: 'https://youtube.com/@actuallycarterpcs', label: 'YouTube', color: '#FF0000' },
  { Icon: FaInstagram, href: 'https://instagram.com/carterpcs_', label: 'Instagram', color: '#E1306C' },
  { Icon: FaXTwitter,  href: 'https://x.com/realcarterpcs',   label: 'X',  color: '#e2e8f0' },
];

const TYPED_STRINGS = ['Tech Enthusiast', 'Content Creator', 'PC God', 'Photographer', 'Everyday Technologist'];

const useTyped = (strings, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [cursor, setCursor] = useState(true);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const cursorTimer = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    let timer;
    const tick = () => {
      const current = strings[idx.current];
      if (!deleting.current) {
        setDisplay(current.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          timer = setTimeout(tick, pause);
          return;
        }
      } else {
        setDisplay(current.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % strings.length;
        }
      }
      timer = setTimeout(tick, deleting.current ? speed / 2 : speed);
    };
    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, []);

  return { display, cursor };
};

const Sidebar = ({ activeSection, mobileOpen, onClose }) => {
  const { display, cursor } = useTyped(TYPED_STRINGS);

  return (
    <>
      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-40 w-72 flex flex-col
          transition-transform duration-300
          lg:translate-x-0
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          background: 'rgba(8, 12, 20, 0.97)',
          backdropFilter: 'blur(24px)',
          borderRight: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Profile Area */}
        <div className="flex flex-col items-center pt-10 pb-6 px-6 border-b border-white/5">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full animate-spin-slow" style={{
              background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #f472b6, #3b82f6)',
              padding: '2px',
              borderRadius: '50%',
              animation: 'spin 4s linear infinite',
            }} />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-background">
              <img
                src="/carter.jpg"
                alt="CarterPCs"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="font-display text-xl font-black text-white mb-0.5">Carter Smith</h1>
          <p className="text-xs text-slate-500 mb-3">@carterpcs</p>

          {/* Typed text */}
          <div className="h-6 flex items-center">
            <span className="text-sm font-semibold text-blue-400">
              {display}
              <span className={`ml-0.5 ${cursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </span>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2 w-full mt-5">
            {[
              { v: '6.7M', l: 'TikTok' },
              { v: '2.8M', l: 'YouTube' },
              { v: '6.3B', l: 'Views' },
            ].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center p-2 rounded-lg bg-white/4 border border-white/5">
                <span className="font-display font-black text-sm text-white">{v}</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          <ul className="space-y-1">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-base w-5 text-center">{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="px-6 py-6 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-3 font-semibold">Follow</p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="flex-1 flex items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group"
              >
                <Icon size={16} style={{ color }} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-slate-700 text-center mt-4">carterpcs@rakugomedia.com</p>
        </div>
      </aside>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
