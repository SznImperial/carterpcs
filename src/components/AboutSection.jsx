import React, { useEffect, useRef, useState } from 'react';
import { Quote, MapPin, Video, TrendingUp } from 'lucide-react';

const milestones = [
  { icon: MapPin,    label: 'Moved to LA at 18', sub: 'From Michigan, with a mission' },
  { icon: Video,     label: '4 Videos Per Day',   sub: 'Six years straight — no breaks' },
  { icon: TrendingUp, label: '6.3B Views',        sub: 'A track record that speaks for itself' },
];

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
  }, [threshold]);
  return [ref, visible];
};

const AboutSection = () => {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Subtle accent orb */}
      <div className="orb w-[500px] h-[500px] bg-violet-600 top-[10%] right-[-200px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* LEFT — Visual Panel */}
          <div className={`w-full lg:w-[45%] transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            {/* Photo card */}
            <div className="relative">
              {/* Decorative border behind */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-600/30 via-violet-600/20 to-transparent" />
              <div className="relative h-[500px] w-full bg-surface-2 rounded-2xl overflow-hidden border border-white/5">
                <img
                  src="https://www.tiktok.com/api/img/?userId=6791531008480691206&location=2&aid=1988"
                  alt="Carter Smith — CarterPCs"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="hidden absolute inset-0 flex-col items-center justify-center gap-3 text-slate-600">
                  <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center">
                    <span className="text-3xl">📸</span>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-widest">CarterPCs</span>
                </div>
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-2 to-transparent pointer-events-none" />
                {/* Name tag */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Content Creator</p>
                    <p className="font-display text-2xl font-black text-white">Carter Smith</p>
                  </div>
                  <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full">
                    <span className="text-xs font-bold text-blue-400">@carterpcs</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 glass-card px-5 py-4 glow-blue">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-0.5">Content Since</p>
                <p className="text-2xl font-black text-white font-display">2018</p>
              </div>
            </div>

            {/* Milestone strip */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {milestones.map(({ icon: Icon, label, sub }, i) => (
                <div key={i} className="glass-card p-4 flex flex-col gap-2">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg w-fit">
                    <Icon size={16} />
                  </div>
                  <p className="text-sm font-bold text-white leading-tight">{label}</p>
                  <p className="text-[11px] text-slate-500 leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Text Content */}
          <div className={`w-full lg:w-[55%] flex flex-col justify-center pt-4 lg:pt-12 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <span className="section-label">About Carter</span>

            <h2 className="font-display text-5xl md:text-6xl font-black leading-tight mb-8">
              The <span className="gradient-text">"Everyman"</span>{' '}
              Technologist
            </h2>

            <div className="space-y-5 text-[17px] text-slate-400 leading-relaxed mb-10">
              <p>
                At just <strong className="text-white font-semibold">18 years old</strong>, Carter Smith left Michigan 
                and drove to Los Angeles with a singular vision: to build a digital media empire fueled purely 
                by his obsession with technology.
              </p>
              <p>
                What followed was unprecedented. By mastering a{' '}
                <strong className="text-white font-semibold">"capturing vs. creating"</strong> methodology — 
                publishing <strong className="text-white font-semibold">4 videos a day for 6 straight years</strong> — 
                he became the bridge between the tech world and everyday people who just want to know what's worth buying.
              </p>
              <p>
                He doesn't speak to engineers. He speaks to{' '}
                <span className="text-blue-400 font-medium">the rest of us</span>.
              </p>
            </div>

            {/* Pull quote */}
            <div className="relative pl-6 py-6 border-l-2 border-blue-500/50">
              <Quote className="absolute -top-2 -left-3 text-blue-500/30 w-8 h-8" />
              <p className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed italic mb-4">
                "I am not an engineer... But what I do have is an unwavering passion for the technology 
                that's pushing our world forward."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-blue-500/60" />
                <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Carter Smith</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
