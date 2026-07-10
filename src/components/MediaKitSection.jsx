import React, { useEffect, useRef, useState } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa6';

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

const platforms = [
  { Icon: FaTiktok,    label: 'TikTok',    rate: '8.5%', followers: '6.7M', color: '#ff0050' },
  { Icon: FaInstagram, label: 'Instagram', rate: '5.0%', followers: '1.2M', color: '#E1306C' },
];

const demographics = [
  { value: 95, label: 'Male', sub: 'on Instagram', color: '#3b82f6' },
  { value: 65, label: '18–24', sub: 'Core age', color: '#8b5cf6' },
  { value: 80, label: 'US', sub: 'Primary market', color: '#06b6d4' },
];

const partners = [
  { name: 'Samsung', color: '#1428A0' },
  { name: "Jbieber's Audio", color: '#8b5cf6' },
  { name: 'Micro Center', color: '#e63329' },
  { name: 'Tesla', color: '#cc0000' },
  { name: 'Sweetwater', color: '#0099cc' },
  { name: 'Aputure', color: '#f59e0b' },
];

const MediaKitSection = () => {
  const [ref, visible] = useInView();

  return (
    <section id="mediakit" ref={ref} className="py-20 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-blue-700 bottom-[-150px] left-[-100px] opacity-10" />

      <div className="relative z-10 max-w-4xl px-8">
        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">For Brands & Sponsors</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2">
            Audience & <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-slate-400 text-base mt-2 max-w-xl">
            A purchase-intent demographic ideal for any consumer tech brand.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {platforms.map(({ Icon, label, rate, followers, color }, i) => (
            <div
              key={label}
              className={`glass-card p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl" style={{ background: `${color}20`, color }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{label}</p>
                    <p className="text-xs text-slate-500">{followers} followers</p>
                  </div>
                </div>
                <span className="font-display font-black text-3xl" style={{ color }}>{rate}</span>
              </div>
              {/* Animated bar */}
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all ease-out"
                  style={{
                    width: visible ? `${(parseFloat(rate) / 10) * 100}%` : '0%',
                    background: `linear-gradient(90deg, ${color}, ${color}88)`,
                    boxShadow: `0 0 10px ${color}60`,
                    transitionDuration: '1.2s',
                    transitionDelay: `${400 + i * 100}ms`,
                  }}
                />
              </div>
              <p className="text-[10px] text-slate-600 mt-2">Engagement rate (industry avg: ~1.5%)</p>
            </div>
          ))}
        </div>

        {/* Demo + Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Demographics */}
          <div
            className={`glass-card p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="font-display font-bold text-white mb-5 text-lg">Demographics</h3>

            {/* Donut rings row */}
            <div className="flex gap-4 justify-around mb-6">
              {demographics.map(({ value, label, sub, color }, i) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="absolute inset-0" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                      <circle
                        cx="40" cy="40" r="32"
                        stroke={color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 32}`}
                        strokeDashoffset={`${2 * Math.PI * 32 * (1 - value / 100)}`}
                        transform="rotate(-90 40 40)"
                        style={{
                          filter: `drop-shadow(0 0 6px ${color}70)`,
                          transition: 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)',
                          transitionDelay: `${500 + i * 150}ms`,
                        }}
                      />
                    </svg>
                    <span className="font-display font-black text-sm text-white">{value}%</span>
                  </div>
                  <p className="text-xs font-bold text-white text-center">{label}</p>
                  <p className="text-[10px] text-slate-500 text-center">{sub}</p>
                </div>
              ))}
            </div>

            {/* Age bars */}
            <div className="space-y-2.5">
              {[
                { label: '13–17', pct: 12, color: '#8b5cf6' },
                { label: '18–24', pct: 65, color: '#3b82f6' },
                { label: '25–34', pct: 18, color: '#06b6d4' },
                { label: '35+',   pct: 5,  color: '#94a3b8' },
              ].map(({ label, pct, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-500 w-10 font-mono flex-shrink-0">{label}</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: visible ? `${pct}%` : '0%',
                        background: color,
                        transition: 'width 1.2s ease',
                        transitionDelay: '700ms',
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 w-6 text-right">{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div
            className={`glass-card p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="font-display font-bold text-white mb-5 text-lg">Past Partners</h3>
            <div className="grid grid-cols-2 gap-3">
              {partners.map(({ name, color }, i) => (
                <div
                  key={name}
                  className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                  style={{ borderColor: `${color}25`, background: `${color}08` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0"
                    style={{ background: `${color}20`, color }}
                  >
                    {name.charAt(0)}
                  </div>
                  <p className="text-xs font-semibold text-white leading-tight">{name}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-[10px] text-slate-600 uppercase tracking-widest text-center mb-2">
                Managed by
              </p>
              <p className="text-sm font-bold text-slate-300 text-center">Rakugo Media</p>
              <p className="text-xs text-blue-400 text-center mt-1">carterpcs@rakugomedia.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKitSection;
