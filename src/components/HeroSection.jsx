import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const useInView = (threshold = 0.15) => {
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

const HeroSection = () => {
  const [ref, visible] = useInView(0.1);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      <div className="orb w-[500px] h-[500px] bg-primary top-[-150px] right-[-100px] opacity-20" />
      <div className="orb w-[350px] h-[350px] bg-accent bottom-[-100px] left-[-50px] opacity-15" style={{ animationDelay: '-4s' }} />

    
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="relative z-20 px-8 py-24 max-w-3xl">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <span className="section-label">Welcome 👋</span>
        </div>

        <h2
          className={`font-display text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Making tech <br />
          less of a <span className="gradient-text">snooze fest.</span>
        </h2>

        <p
          className={`text-lg text-slate-400 max-w-xl mb-10 leading-relaxed transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '320ms' }}
        >
          LA-based tech creator breaking down the gadgets, gear, and industry moves that actually matter — 4 videos a day, every day.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '440ms' }}
        >
          <a href="#links" className="btn-primary">
            My Links <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-outline">
            Work With Me
          </a>
        </div>
      </div>

      
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-1 text-slate-700 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
