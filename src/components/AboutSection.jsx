import React from 'react';
import { useInView } from '../hooks/useInView';

const AboutSection = () => {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} className="py-20 md:py-24 relative overflow-hidden">
      <div className="orb w-[380px] h-[380px] bg-accent top-0 right-[-140px] opacity-[0.1]" />

      <div className="relative z-10 max-w-4xl px-8">
        <div className={`mb-10 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">About</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-1 tracking-tight">
            The <span className="gradient-text">everyman</span> technologist
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className={`reveal-left ${visible ? 'visible' : ''} delay-2`}>
            <div className="relative">
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-80"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(159,184,205,0.35), transparent 55%, rgba(90,130,166,0.2))',
                }}
              />
              <div className="relative h-80 rounded-[0.9rem] overflow-hidden bg-surface">
                <img
                  src="/carter.jpg"
                  alt="Carter Smith"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c121c] via-[#0c121c]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.16em] font-semibold">
                      Content Creator
                    </p>
                    <p className="font-display font-bold text-white text-lg tracking-tight">
                      Carter Smith
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-primary/15 border border-primary/25 rounded-full text-[11px] font-semibold text-primary">
                    @carterpcs
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mt-4">
              {[
                { v: '18', l: 'Moved to LA' },
                { v: '4/day', l: 'Videos posted' },
                { v: '6 yrs', l: 'Consistent' },
              ].map(({ v, l }, i) => (
                <div
                  key={l}
                  className={`glass-card p-3 text-center reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${280 + i * 60}ms` }}
                >
                  <p className="font-display font-bold text-white text-sm tracking-tight">{v}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex flex-col justify-center reveal-right ${visible ? 'visible' : ''} delay-3`}
          >
            <div className="space-y-4 text-[15px] sm:text-base text-slate-400 leading-relaxed mb-8">
              <p>
                At <strong className="text-white font-semibold">18</strong>, Carter
                left Michigan and moved to Los Angeles with one goal — build a
                digital media brand around his love for technology.
              </p>
              <p>
                Pioneering a{' '}
                <strong className="text-white font-semibold">
                  &ldquo;capturing vs. creating&rdquo;
                </strong>{' '}
                methodology, he posted{' '}
                <strong className="text-white font-semibold">
                  4 videos a day for 6 straight years
                </strong>
                , becoming one of the most recognized voices in consumer tech.
              </p>
            </div>

            <blockquote className="relative pl-5 py-1 border-l-2 border-primary/40">
              <p className="text-[16px] sm:text-[17px] italic text-slate-200/95 leading-relaxed mb-3">
                &ldquo;I am not an engineer… But what I do have is an unwavering
                passion for the technology that&apos;s pushing our world
                forward.&rdquo;
              </p>
              <footer className="flex items-center gap-2.5">
                <div className="w-5 h-px bg-primary/50" />
                <cite className="text-[11px] font-bold text-primary uppercase tracking-[0.14em] not-italic">
                  Carter Smith
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
