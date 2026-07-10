import React, { useEffect, useRef, useState } from 'react';

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

const AboutSection = () => {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-violet-600 top-0 right-[-150px] opacity-10" />

      <div className="relative z-10 max-w-4xl px-8">
        <div className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">About Carter</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2">
            The <span className="gradient-text">"Everyman"</span> Technologist
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — photo */}
          <div
            className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-600/20 via-violet-600/10 to-transparent" />
            <div className="relative h-80 rounded-xl overflow-hidden border border-white/5 bg-surface">
              <img
                src="/carter.jpg"
                alt="Carter Smith"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Content Creator</p>
                  <p className="font-display font-black text-white">Carter Smith</p>
                </div>
                <span className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-bold text-blue-400">@carterpcs</span>
              </div>
            </div>

            {/* Milestone pills */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { v: '18', l: 'Moved to LA' },
                { v: '4/day', l: 'Videos Posted' },
                { v: '6 yrs', l: 'Consistent' },
              ].map(({ v, l }) => (
                <div key={l} className="glass-card p-3 text-center">
                  <p className="font-display font-black text-white text-sm">{v}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="space-y-4 text-[16px] text-slate-400 leading-relaxed mb-8">
              <p>
                At <strong className="text-white">18</strong>, Carter left Michigan and moved to Los Angeles with one goal — build a digital media empire around his love for technology.
              </p>
              <p>
                Pioneering a <strong className="text-white">"capturing vs. creating"</strong> methodology, he posted <strong className="text-white">4 videos a day for 6 straight years</strong>, becoming one of the most recognized voices in consumer tech.
              </p>
            </div>

            {/* Quote */}
            <div className="pl-5 py-5 border-l-2 border-blue-500/40">
              <p className="text-[17px] italic text-slate-200 leading-relaxed mb-3">
                "I am not an engineer... But what I do have is an unwavering passion for the technology that's pushing our world forward."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-blue-500/60" />
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Carter Smith</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
