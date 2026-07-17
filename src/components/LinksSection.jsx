import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const links = [
  {
    label: 'My Amazon Store',
    sub: 'All my favourite tech picks',
    href: 'https://www.amazon.com/shop/carterpcs',
    initial: 'A',
    color: '#ff9900',
  },
  {
    label: 'Micro Center — First Timer Deals',
    sub: 'Exclusive savings for first-time customers',
    href: 'https://micro.center/Carter01',
    initial: 'M',
    color: '#e63329',
  },
  {
    label: 'Best Deals on PC Parts',
    sub: 'Micro Center weekly deals',
    href: 'https://micro.center/Carter3D',
    initial: 'P',
    color: '#e63329',
  },
  {
    label: '$1,000 Off A Tesla',
    sub: 'Use my referral link at checkout',
    href: 'https://www.tesla.com/referral/carter445512',
    initial: 'T',
    color: '#cc0000',
  },
  {
    label: 'Audio Gear on Sweetwater',
    sub: 'The best place to buy audio equipment',
    href: 'https://www.sweetwater.com/',
    initial: 'S',
    color: '#0099cc',
  },
  {
    label: 'Pre-Lubed Mechanical Switches',
    sub: 'Loobeds — best in the game',
    href: 'https://loobedswitches.com/?ref=sj-fxicvokn',
    initial: 'L',
    color: '#8b5cf6',
  },
  {
    label: 'Samsung Galaxy S23 Ultra',
    sub: 'My current daily driver pick',
    href: 'https://howl.me/cjaxd5BWMon',
    initial: 'G',
    color: '#1428A0',
  },
  {
    label: 'Aputure Lighting Gear',
    sub: 'Studio-quality lighting for creators',
    href: 'https://t.nylas.com/t1/277/9telbi8vd4ihey3i9g0p198ug/0/3f50cff1a12c52ae9e83c8c31cc5f0f8452b2916944c6410cfa72deae35aac2b',
    initial: 'A',
    color: '#f59e0b',
  },
  {
    label: 'CarterPCs Store',
    sub: 'Official merch and gear',
    href: 'https://carterpcs.store',
    initial: 'C',
    color: '#9fb8cd',
  },
];

const LinksSection = () => {
  const [ref, visible] = useInView();

  return (
    <section id="links" ref={ref} className="py-20 md:py-24 relative">
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-8">
        <div className={`mb-12 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Resources</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-1 mb-3 tracking-tight">
            Partner deals &{' '}
            <span className="gradient-text">recommendations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-lg">
            Everything I use, recommend, and partner with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-card group reveal ${visible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${80 + i * 45}ms`,
                ['--link-color']: link.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${link.color}45`;
                e.currentTarget.style.boxShadow = `0 10px 36px ${link.color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-sm icon-chip"
                style={{
                  background: `${link.color}14`,
                  color: link.color,
                  border: `1px solid ${link.color}22`,
                }}
              >
                {link.initial}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm leading-snug mb-0.5 group-hover:text-white transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-slate-500 truncate">{link.sub}</p>
              </div>

              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/[0.04] text-slate-600 group-hover:text-slate-300 group-hover:bg-white/[0.08] transition-all duration-200">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
