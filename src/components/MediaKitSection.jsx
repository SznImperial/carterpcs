import React from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa6';
import { useInView } from '../hooks/useInView';

const platforms = [
  { Icon: FaTiktok,    label: 'TikTok',    rate: '8.5%', followers: '6.7M', color: '#ff0050', pct: 85 },
  { Icon: FaInstagram, label: 'Instagram', rate: '5.0%', followers: '1.2M', color: '#E1306C', pct: 50 },
];

const demographics = [
  { value: 95, label: 'Male',  sub: 'on Instagram', color: '#5a82a6' },
  { value: 65, label: '18–24', sub: 'Core age',     color: '#9fb8cd' },
  { value: 80, label: 'US',    sub: 'Primary market', color: '#6b9ab8' },
];

const partners = [
  { name: 'Samsung',       color: '#5a7ab0' },
  { name: "Jbieber's Audio", color: '#8b9dc3' },
  { name: 'Micro Center',  color: '#c45a52' },
  { name: 'Tesla',         color: '#a85555' },
  { name: 'Sweetwater',    color: '#4a9ab8' },
  { name: 'Aputure',       color: '#c49a4a' },
];

const ageBands = [
  { label: '13–17', pct: 12, color: '#6b7c9a' },
  { label: '18–24', pct: 65, color: '#9fb8cd' },
  { label: '25–34', pct: 18, color: '#5a82a6' },
  { label: '35+',   pct: 5,  color: '#64748b' },
];

const MediaKitSection = () => {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="mediakit" ref={ref} className="py-20 md:py-24 relative overflow-hidden">
      <div className="orb w-[380px] h-[380px] bg-primary bottom-[-140px] left-[-100px] opacity-[0.1]" />

      <div className="relative z-10 max-w-4xl px-8">
        <div className={`mb-10 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">For Brands</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-1 tracking-tight">
            Audience & <span className="gradient-text">analytics</span>
          </h2>
          <p className="text-slate-400 text-base mt-3 max-w-xl leading-relaxed">
            A purchase-intent demographic ideal for consumer tech brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
          {platforms.map(({ Icon, label, rate, followers, color, pct }, i) => (
            <div
              key={label}
              className={`glass-card p-6 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: `${color}18`, color }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{label}</p>
                    <p className="text-xs text-slate-500">{followers} followers</p>
                  </div>
                </div>
                <span
                  className="font-display font-bold text-3xl tracking-tight"
                  style={{ color }}
                >
                  {rate}
                </span>
              </div>

              <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full progress-fill"
                  style={{
                    width: visible ? `${pct}%` : '0%',
                    background: `linear-gradient(90deg, ${color}, ${color}99)`,
                    transitionDelay: `${400 + i * 100}ms`,
                  }}
                />
              </div>
              <p className="text-[10px] text-slate-600 mt-2.5">
                Engagement rate · industry avg ~1.5%
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            className={`glass-card p-6 reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '260ms' }}
          >
            <h3 className="font-display font-semibold text-white mb-6 text-base tracking-tight">
              Demographics
            </h3>

            <div className="flex gap-3 justify-around mb-7">
              {demographics.map(({ value, label, sub, color }, i) => {
                const r = 30;
                const c = 2 * Math.PI * r;
                const offset = visible ? c * (1 - value / 100) : c;
                return (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="relative w-[4.5rem] h-[4.5rem] flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 72 72" fill="none">
                        <circle
                          cx="36"
                          cy="36"
                          r={r}
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="6"
                        />
                        <circle
                          className="ring-progress"
                          cx="36"
                          cy="36"
                          r={r}
                          stroke={color}
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={c}
                          strokeDashoffset={offset}
                          transform="rotate(-90 36 36)"
                          style={{
                            filter: `drop-shadow(0 0 4px ${color}50)`,
                            transitionDelay: `${500 + i * 120}ms`,
                          }}
                        />
                      </svg>
                      <span className="font-display font-bold text-sm text-white relative z-10">
                        {value}%
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-white text-center">{label}</p>
                    <p className="text-[10px] text-slate-500 text-center">{sub}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2.5">
              {ageBands.map(({ label, pct, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-500 w-10 font-mono flex-shrink-0">
                    {label}
                  </span>
                  <div className="flex-1 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full progress-fill"
                      style={{
                        width: visible ? `${pct}%` : '0%',
                        background: color,
                        transitionDelay: '700ms',
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 w-6 text-right">
                    {pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`glass-card p-6 reveal ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '340ms' }}
          >
            <h3 className="font-display font-semibold text-white mb-5 text-base tracking-tight">
              Past partners
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {partners.map(({ name, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04] cursor-default"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-xs flex-shrink-0"
                    style={{ background: `${color}20`, color }}
                  >
                    {name.charAt(0)}
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">{name}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/[0.05]">
              <p className="text-[10px] text-slate-600 uppercase tracking-[0.16em] text-center mb-1.5 font-semibold">
                Managed by
              </p>
              <p className="text-sm font-semibold text-slate-300 text-center">Rakugo Media</p>
              <a
                href="mailto:carterpcs@rakugomedia.com"
                className="block text-xs text-primary text-center mt-1 hover:text-primary/80 transition-colors"
              >
                carterpcs@rakugomedia.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKitSection;
