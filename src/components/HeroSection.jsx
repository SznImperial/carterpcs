import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const HeroSection = () => {
  const [ref, visible] = useInView(0.08);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
    >
      <div className="orb w-[480px] h-[480px] bg-primary top-[-180px] right-[-120px]" />
      <div
        className="orb w-[320px] h-[320px] bg-accent bottom-[-80px] left-[-60px] opacity-[0.12]"
        style={{ animationDelay: '-6s' }}
      />

      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#080c14] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 px-8 py-28 max-w-3xl">
        <div className={`reveal ${visible ? 'visible' : ''} delay-1`}>
          <span className="section-label">Portfolio</span>
        </div>

        <h2
          className={`font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight mb-6 reveal ${visible ? 'visible' : ''} delay-2`}
        >
          Making tech
          <br />
          less of a{' '}
          <span className="gradient-text">snooze fest.</span>
        </h2>

        <p
          className={`text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed reveal ${visible ? 'visible' : ''} delay-3`}
        >
          LA-based tech creator breaking down the gadgets, gear, and industry
          moves that actually matter — four videos a day, every day.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3.5 reveal ${visible ? 'visible' : ''} delay-4`}
        >
          <a href="#links" className="btn-primary">
            My Links
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="btn-outline">
            Work With Me
          </a>
        </div>

        <div
          className={`mt-14 flex flex-wrap gap-8 reveal ${visible ? 'visible' : ''} delay-5`}
        >
          {[
            { v: '6.7M', l: 'TikTok followers' },
            { v: '2.8M', l: 'YouTube subs' },
            { v: '6.3B', l: 'All-time views' },
          ].map(({ v, l }) => (
            <div key={l} className="flex flex-col">
              <span className="font-display text-2xl font-bold text-white tracking-tight">{v}</span>
              <span className="text-xs text-slate-500 mt-0.5">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#links"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-500 hover:text-primary transition-colors duration-300 scroll-cue"
        aria-label="Scroll to links"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <ChevronDown size={16} strokeWidth={1.75} />
      </a>
    </section>
  );
};

export default HeroSection;
