import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FaTiktok, FaYoutube } from 'react-icons/fa6';

const stats = [
  { value: '6.7M+', label: 'TikTok Followers', Icon: FaTiktok, color: '#ff0050', glow: 'rgba(255,0,80,0.25)' },
  { value: '2.8M+', label: 'YouTube Subscribers', Icon: FaYoutube, color: '#FF0000', glow: 'rgba(255,0,0,0.25)' },
  { value: '6.3B',  label: 'All-Time Views', Icon: null, color: '#60a5fa', glow: 'rgba(59,130,246,0.25)' },
];

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      
      {/* Animated Grid */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Glowing Orbs */}
      <div className="orb w-[600px] h-[600px] bg-blue-600 top-[-150px] left-[-200px]" />
      <div className="orb w-[400px] h-[400px] bg-violet-600 bottom-[-100px] right-[-100px]" style={{ animationDelay: '-3s' }} />
      <div className="orb w-[300px] h-[300px] bg-blue-400 top-[40%] left-[60%]" style={{ animationDelay: '-5s', animationDuration: '6s' }} />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center text-center pt-32 pb-20">

        {/* Badge */}
        <div
          className={`section-label transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Official Portfolio — Carter Smith
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-6xl md:text-8xl font-black leading-[1.0] tracking-tight mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '150ms' }}
        >
          Making tech less of a{' '}
          <span className="gradient-text text-shadow-glow block md:inline">snooze fest.</span>
        </h1>

        {/* Sub */}
        <p
          className={`text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '250ms' }}
        >
          CarterPCs is the internet's everyman technologist — making complex tech 
          accessible, entertaining, and impossible to ignore.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '350ms' }}
        >
          <a href="#contact" className="btn-primary">
            Work with CarterPCs <ArrowRight size={18} />
          </a>
          <a href="#about" className="btn-outline">
            Learn More
          </a>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 w-full transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '500ms' }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.Icon;
            return (
              <div key={i} className="stat-card px-6 py-5 flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 mb-1">
                  {Icon && <Icon size={18} style={{ color: stat.color }} />}
                  <span className="text-4xl md:text-5xl font-black font-display text-white">{stat.value}</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
};

export default HeroSection;
