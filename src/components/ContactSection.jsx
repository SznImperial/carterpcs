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
  }, [threshold]);
  return [ref, visible];
};

const socials = [
  { Icon: FaTiktok,    label: 'TikTok',    handle: '@carterpcs', color: '#ff0050', followers: '6.7M' },
  { Icon: FaYoutube,   label: 'YouTube',   handle: '@CarterPCs', color: '#FF0000', followers: '2.8M' },
  { Icon: FaInstagram, label: 'Instagram', handle: '@carterpcs', color: '#E1306C', followers: '1.2M' },
  { Icon: FaXTwitter,  label: 'X / Twitter', handle: '@CarterPCs', color: '#e2e8f0', followers: '450K' },
];

const ContactSection = () => {
  const [ref, visible] = useInView();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080c14 0%, #0a0f1e 100%)' }}>
      <div className="orb w-[500px] h-[500px] bg-blue-600 top-[-100px] right-[-150px] opacity-10" />
      <div className="orb w-[400px] h-[400px] bg-violet-600 bottom-[-100px] left-[-150px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label">Get In Touch</span>
          <h2 className="font-display text-5xl md:text-6xl font-black leading-tight mb-5">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            For brand partnerships, sponsorships, and business inquiries — 
            all managed through <strong className="text-white">Rakugo Media</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left column — info + socials */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            {/* Agency info */}
            <div className="glass-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Management</p>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Rakugo Media</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                All business inquiries are handled by Rakugo Media. Use the form to reach their team directly.
              </p>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Follow CarterPCs</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ Icon, label, handle, color, followers }, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                  >
                    <div className="p-2.5 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${color}18`, color }}>
                      <Icon size={18} />
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

          {/* Right column — form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="glass-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-4xl">
                    🎉
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">The Rakugo Media team will get back to you shortly.</p>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input type="text" className="input-field pl-10" placeholder="John" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input type="text" className="input-field pl-10" placeholder="Doe" required />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Company / Brand
                    </label>
                    <div className="relative">
                      <Building2 size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input type="text" className="input-field pl-10" placeholder="Brand Name" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input type="email" className="input-field pl-10" placeholder="john@company.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={15} className="absolute left-4 top-4 text-slate-500" />
                      <textarea
                        rows="4"
                        className="input-field pl-10 resize-none"
                        placeholder="Tell us about your brand and the kind of collaboration you have in mind..."
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary justify-center mt-2 w-full text-base">
                    Send Inquiry <Send size={18} />
                  </button>
                  <p className="text-[11px] text-slate-600 text-center">
                    All inquiries are responded to within 48 hours by the Rakugo Media team.
                  </p>
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
