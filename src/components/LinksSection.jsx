import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

const links = [
  {
    label: 'My Amazon Store',
    sub: 'All my favourite tech picks',
    href: 'https://www.amazon.com/shop/carterpcs',
    emoji: '🛒',
    color: '#ff9900',
  },
  {
    label: 'Micro Center — First Timer Deals',
    sub: 'Exclusive savings for first-time customers',
    href: 'https://micro.center/Carter01',
    emoji: '🖥️',
    color: '#e63329',
  },
  {
    label: 'Best Deals on PC Parts',
    sub: 'Micro Center weekly deals',
    href: 'https://micro.center/Carter3D',
    emoji: '⚡',
    color: '#e63329',
  },
  {
    label: '$1,000 Off A Tesla',
    sub: 'Use my referral link at checkout',
    href: 'https://www.tesla.com/referral/carter445512',
    emoji: '🚗',
    color: '#cc0000',
  },
  {
    label: 'Audio Gear on Sweetwater',
    sub: 'The best place to buy audio equipment',
    href: 'https://www.sweetwater.com/',
    emoji: '🎵',
    color: '#0099cc',
  },
  {
    label: 'Pre-Lubed Mechanical Switches',
    sub: 'Loobeds — best in the game',
    href: 'https://loobedswitches.com/?ref=sj-fxicvokn',
    emoji: '⌨️',
    color: '#8b5cf6',
  },
  {
    label: 'Samsung Galaxy S23 Ultra',
    sub: 'My current daily driver pick',
    href: 'https://howl.me/cjaxd5BWMon',
    emoji: '📱',
    color: '#1428A0',
  },
  {
    label: 'Aputure Lighting Gear',
    sub: 'Studio-quality lighting for creators',
    href: 'https://t.nylas.com/t1/277/9telbi8vd4ihey3i9g0p198ug/0/3f50cff1a12c52ae9e83c8c31cc5f0f8452b2916944c6410cfa72deae35aac2b',
    emoji: '💡',
    color: '#f59e0b',
  },
  {
    label: 'CarterPCs Store',
    sub: 'Official merch and gear',
    href: 'https://carterpcs.store',
    emoji: '🛍️',
    color: '#3b82f6',
  },
];

const LinksSection = () => {
  const [ref, visible] = useInView();

  return (
    <section id="links" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-8">
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">My Links 🔗</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2 mb-3">
            Resources & <span className="gradient-text">Partner Deals</span>
          </h2>
          <p className="text-slate-400 text-lg">Everything I use, recommend, and partner with.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-5 rounded-2xl transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                background: 'rgba(14, 20, 36, 0.7)',
                border: `1px solid rgba(255,255,255,0.05)`,
                transitionDelay: `${i * 50}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${link.color}40`;
                e.currentTarget.style.boxShadow = `0 8px 32px ${link.color}15`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Emoji icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${link.color}15` }}
              >
                {link.emoji}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm leading-snug mb-0.5">{link.label}</p>
                <p className="text-xs text-slate-500 truncate">{link.sub}</p>
              </div>

              {/* Arrow */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 text-slate-600 group-hover:text-white group-hover:bg-white/10 transition-all duration-200"
              >
                <ArrowUpRight size={15} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
