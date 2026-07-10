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
  }, [threshold]);
  return [ref, visible];
};

const EngagementBar = ({ platform, rate, color, Icon, visible, delay }) => {
  const pct = parseFloat(rate);
  return (
    <div
      className={`glass-card p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl" style={{ background: `${color}20`, color }}>
            <Icon size={22} />
          </div>
          <span className="font-bold text-white text-lg">{platform}</span>
        </div>
        <span className="font-display font-black text-3xl" style={{ color }}>{rate}</span>
      </div>

      {/* Animated bar */}
      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1500 ease-out"
          style={{
            width: visible ? `${(pct / 10) * 100}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 12px ${color}80`,
            transitionDelay: delay,
            transitionDuration: '1.2s',
          }}
        />
      </div>
      <p className="text-xs text-slate-500 mt-2 font-medium">Engagement Rate (Industry avg: ~1.5%)</p>
    </div>
  );
};

const DemographicDonut = ({ value, label, sub, color, visible, delay }) => (
  <div
    className={`flex flex-col items-center gap-3 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    style={{ transitionDelay: delay }}
  >
    {/* Donut ring */}
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
        <circle
          cx="60" cy="60" r="50"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 50}`}
          strokeDashoffset={`${2 * Math.PI * 50 * (1 - (parseFloat(value) / 100))}`}
          transform="rotate(-90 60 60)"
          style={{
            filter: `drop-shadow(0 0 8px ${color}80)`,
            transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)',
            transitionDelay: delay,
          }}
        />
      </svg>
      <div className="flex flex-col items-center">
        <span className="font-display font-black text-2xl text-white">{value}</span>
      </div>
    </div>
    <div className="text-center">
      <p className="font-bold text-white text-sm">{label}</p>
      <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
    </div>
  </div>
);

const MediaKitSection = () => {
  const [ref, visible] = useInView();

  const partners = [
    { name: 'Samsung', desc: 'Multi-platform campaign integration', color: '#1428A0' },
    { name: "Justin Bieber's Audio Line", desc: 'Exclusive product launch collaboration', color: '#8b5cf6' },
    { name: '+ Dozens More', desc: 'A portfolio of leading technology brands', color: '#3b82f6' },
  ];

  return (
    <section id="mediakit" ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-blue-700 bottom-[-200px] left-[-200px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">For Brands & Partners</span>
          <h2 className="font-display text-5xl md:text-6xl font-black leading-tight mb-5">
            Audience & <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A hyper-engaged, purchase-intent audience that's the dream demographic for any consumer tech brand.
          </p>
        </div>

        {/* Engagement Rates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <EngagementBar platform="TikTok"    rate="8.5%" color="#ff0050" Icon={FaTiktok}    visible={visible} delay="100ms" />
          <EngagementBar platform="Instagram" rate="5.0%" color="#E1306C" Icon={FaInstagram} visible={visible} delay="200ms" />
        </div>

        {/* Demographics + Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Demographics Card */}
          <div
            className={`lg:col-span-3 glass-card p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="font-display text-xl font-bold text-white mb-8">Audience Demographics</h3>
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-around">
              <DemographicDonut value="95%" label="Male Audience"   sub="on Instagram" color="#3b82f6" visible={visible} delay="500ms" />
              <DemographicDonut value="65%" label="Ages 18–24"     sub="Core demographic" color="#8b5cf6" visible={visible} delay="650ms" />
              <DemographicDonut value="80%" label="US-Based"       sub="Primary market" color="#06b6d4" visible={visible} delay="800ms" />
            </div>

            {/* Age bar chart */}
            <div className="mt-10 space-y-3">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">Age Distribution</p>
              {[
                { label: '13–17', pct: 12, color: '#8b5cf6' },
                { label: '18–24', pct: 65, color: '#3b82f6' },
                { label: '25–34', pct: 18, color: '#06b6d4' },
                { label: '35+',   pct: 5,  color: '#94a3b8' },
              ].map(({ label, pct, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-xs text-slate-500 w-12 font-mono">{label}</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all ease-out"
                      style={{
                        width: visible ? `${pct}%` : '0%',
                        background: color,
                        boxShadow: `0 0 8px ${color}60`,
                        transitionDuration: '1.3s',
                        transitionDelay: '700ms',
                      }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-300 w-8 text-right">{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Card */}
          <div
            className={`lg:col-span-2 glass-card p-8 flex flex-col transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="font-display text-xl font-bold text-white mb-8">Past Partnerships</h3>
            <div className="flex flex-col gap-4 flex-1">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                  style={{ borderColor: `${p.color}25`, background: `${p.color}08` }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ background: `${p.color}20`, color: p.color }}>
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{p.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <p className="text-xs text-slate-600 uppercase tracking-widest">Managed by Rakugo Media</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaKitSection;
