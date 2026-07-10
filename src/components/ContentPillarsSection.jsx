import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Cpu, Sparkles, Car, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    title: 'Consumer Tech & Hot Takes',
    icon: Monitor,
    tag: 'Reviews',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.18)',
    description:
      'Rapid-fire, honest opinions on the latest gadgets, phones, and peripherals — before the hype settles.',
    emoji: '📱',
  },
  {
    title: 'Custom PC Building',
    icon: Cpu,
    tag: 'Hardware',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.18)',
    description:
      'Where it all started. High-end dream builds, budget bang-for-buck guides, and hardware pushed to its limits.',
    emoji: '🖥️',
  },
  {
    title: 'AI & Industry Commentary',
    icon: Sparkles,
    tag: 'Analysis',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.18)',
    description:
      'Complex AI moves and industry shifts, translated into digestible, engaging content for millions.',
    emoji: '🤖',
  },
  {
    title: 'Lifestyle & Automotive',
    icon: Car,
    tag: 'Lifestyle',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.18)',
    description:
      'Beyond the desk. Fast cars, LA vlogs, and the seamless integration of technology into modern life.',
    emoji: '🚗',
  },
];

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

const ContentPillarsSection = () => {
  const [ref, visible] = useInView();

  return (
    <section id="pillars" ref={ref} className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080c14 0%, #0d1120 50%, #080c14 100%)' }}>
      
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">The Content</span>
          <h2 className="font-display text-5xl md:text-6xl font-black leading-tight mb-5">
            Core <span className="gradient-text">Content Pillars</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From the latest iPhone to bleeding-edge silicon — content that spans the full spectrum of modern technology culture.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`pillar-card p-8 group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
              
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="p-3 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${pillar.color}18`, color: pillar.color }}
                  >
                    <Icon size={26} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: `${pillar.color}15`, color: pillar.color }}
                    >
                      {pillar.tag}
                    </span>
                    <div className="p-2 rounded-lg bg-white/5 text-slate-500 group-hover:text-white group-hover:bg-white/10 transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 leading-tight">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-[15px]">{pillar.description}</p>
                </div>

                
                <div
                  className="w-full h-44 rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, #0d1120 60%, ${pillar.color}18)`, border: `1px solid ${pillar.color}20` }}
                >
                  <span className="text-5xl">{pillar.emoji}</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${pillar.color}08, ${pillar.color}18)` }}
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-slate-600">Content Placeholder</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentPillarsSection;
