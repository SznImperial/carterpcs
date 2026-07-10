import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Building2, User, MessageSquare } from 'lucide-react';
import { FaInstagram, FaYoutube, FaXTwitter, FaTiktok } from 'react-icons/fa6';

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

const socials = [
  { Icon: FaTiktok,    label: 'TikTok',    handle: '@carterpcs',   href: 'https://tiktok.com/@carterpcs',               color: '#ff0050', followers: '6.7M' },
  { Icon: FaYoutube,   label: 'YouTube',   handle: '@actuallycarterpcs', href: 'https://youtube.com/@actuallycarterpcs', color: '#FF0000', followers: '2.8M' },
  { Icon: FaInstagram, label: 'Instagram', handle: '@carterpcs_',  href: 'https://instagram.com/carterpcs_',           color: '#E1306C', followers: '1.2M' },
  { Icon: FaXTwitter,  label: 'X',         handle: '@realcarterpcs', href: 'https://x.com/realcarterpcs',                 color: '#e2e8f0', followers: '450K' },
];

const ContactSection = () => {
  const [ref, visible] = useInView();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-primary top-[-100px] right-[-150px] opacity-10" />

      <div className="relative z-10 max-w-4xl px-8">
        
        <div className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Get In Touch ✉</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 text-base mt-2 max-w-xl">
            All brand partnerships and sponsorships are managed through <strong className="text-white">Rakugo Media</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div
            className={`flex flex-col gap-5 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="glass-card p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Management</p>
              <h3 className="font-display text-xl font-bold text-white mb-1">Rakugo Media</h3>
              <a href="mailto:carterpcs@rakugomedia.com" className="text-sm text-primary hover:text-primary/80 transition-colors">
                carterpcs@rakugomedia.com
              </a>
            </div>

            <div className="glass-card p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Follow Carter</p>
              <div className="flex flex-col gap-2.5">
                {socials.map(({ Icon, label, handle, href, color, followers }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ background: `${color}18`, color }}>
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="text-xs text-slate-500">{handle}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-500">{followers}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="glass-card p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center min-h-[380px] gap-5 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-3xl">🎉</div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-1">Message Sent!</h3>
                    <p className="text-slate-400 text-sm">Rakugo Media will respond within 48 hours.</p>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-sm">Send Another</button>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">First Name</label>
                      <div className="relative">
                        <User size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input type="text" className="input-field pl-9 text-sm py-3" placeholder="John" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Last Name</label>
                      <div className="relative">
                        <User size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input type="text" className="input-field pl-9 text-sm py-3" placeholder="Doe" required />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Company / Brand</label>
                    <div className="relative">
                      <Building2 size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input type="text" className="input-field pl-9 text-sm py-3" placeholder="Brand Name" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Email</label>
                    <div className="relative">
                      <Mail size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input type="email" className="input-field pl-9 text-sm py-3" placeholder="john@brand.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Message</label>
                    <div className="relative">
                      <MessageSquare size={13} className="absolute left-3.5 top-3.5 text-slate-500" />
                      <textarea rows="4" className="input-field pl-9 text-sm resize-none" placeholder="Tell us about your collaboration idea..." required />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary justify-center w-full mt-1">
                    Send Inquiry <Send size={16} />
                  </button>
                  <p className="text-[10px] text-slate-600 text-center">Responded to within 48h by Rakugo Media.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
