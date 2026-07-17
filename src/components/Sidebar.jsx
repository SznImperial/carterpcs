import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaYoutube, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { Home, Link2, User, BarChart3, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home',      href: '#hero',     icon: Home },
  { name: 'Links',     href: '#links',    icon: Link2 },
  { name: 'About',     href: '#about',    icon: User },
  { name: 'Media Kit', href: '#mediakit', icon: BarChart3 },
  { name: 'Contact',   href: '#contact',  icon: Mail },
];

const socials = [
  { Icon: FaTiktok,    href: 'https://tiktok.com/@carterpcs',          label: 'TikTok',    color: '#ff0050' },
  { Icon: FaYoutube,   href: 'https://youtube.com/@actuallycarterpcs', label: 'YouTube',   color: '#FF0000' },
  { Icon: FaInstagram, href: 'https://instagram.com/carterpcs_',       label: 'Instagram', color: '#E1306C' },
  { Icon: FaXTwitter,  href: 'https://x.com/realcarterpcs',            label: 'X',         color: '#e2e8f0' },
];

const TYPED_STRINGS = [
  'Tech Enthusiast',
  'Content Creator',
  'PC Builder',
  'Photographer',
  'Everyday Technologist',
];

const useTyped = (strings, speed = 72, pause = 2000) => {
  const [display, setDisplay] = useState('');
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

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
      timer = setTimeout(tick, deleting.current ? speed / 2.2 : speed);
    };
    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [strings, speed, pause]);

  return display;
};

const Sidebar = ({ activeSection, mobileOpen, onClose }) => {
  const display = useTyped(TYPED_STRINGS);

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/55 z-30 lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-40 w-72 flex flex-col
          transition-transform duration-300 ease-out
          lg:translate-x-0
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          background: 'rgba(8, 12, 20, 0.96)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderRight: '1px solid rgba(255,255,255,0.055)',
        }}
      >
        <div className="flex flex-col items-center pt-10 pb-6 px-6 border-b border-white/[0.05]">
          <div className="avatar-ring relative mb-4">
            <div className="relative z-10 w-[6.5rem] h-[6.5rem] rounded-full overflow-hidden border-2 border-background">
              <img
                src="/carter.jpg"
                alt="Carter Smith"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <h1 className="font-display text-xl font-bold text-white tracking-tight mb-0.5">
            Carter Smith
          </h1>
          <p className="text-xs text-slate-500 mb-3">@carterpcs</p>

          <div className="h-6 flex items-center justify-center min-w-0">
            <span className="text-sm font-medium text-primary tabular-nums">
              {display}
              <span className="typed-cursor" aria-hidden="true" />
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full mt-5">
            {[
              { v: '6.7M', l: 'TikTok' },
              { v: '2.8M', l: 'YouTube' },
              { v: '6.3B', l: 'Views' },
            ].map(({ v, l }) => (
              <div
                key={l}
                className="flex flex-col items-center py-2.5 px-1 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-primary/20 transition-colors duration-300"
              >
                <span className="font-display font-bold text-sm text-white tracking-tight">{v}</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <nav className="flex-1 py-5 px-3 overflow-y-auto scrollbar-hide">
          <ul className="space-y-0.5">
            {navLinks.map(({ name, href, icon: Icon }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={name}>
                  <a
                    href={href}
                    onClick={onClose}
                    className={`nav-item ${isActive ? 'active' : ''}`}
                  >
                    <Icon
                      size={17}
                      strokeWidth={isActive ? 2.25 : 1.75}
                      className="opacity-90"
                    />
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-5 py-5 border-t border-white/[0.05]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600 mb-3 font-semibold">
            Follow
          </p>
          <div className="flex gap-2">
            {socials.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
                className="flex-1 flex items-center justify-center p-2.5 rounded-xl bg-white/[0.04] border border-transparent hover:border-white/10 hover:bg-white/[0.07] transition-all duration-200 group"
              >
                <Icon
                  size={15}
                  style={{ color }}
                  className="transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </a>
            ))}
          </div>
          <a
            href="mailto:carterpcs@rakugomedia.com"
            className="block text-[10px] text-slate-600 hover:text-slate-400 text-center mt-4 transition-colors duration-200 truncate"
          >
            carterpcs@rakugomedia.com
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
