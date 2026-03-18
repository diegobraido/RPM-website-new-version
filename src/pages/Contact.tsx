import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, Mail, Globe } from 'lucide-react';
import YouTubeLoop from '../components/YouTubeLoop';

export default function Contact() {
  return (
    <div className="w-full bg-[#ebedef] min-h-screen pt-20">
      {/* Hero Section with Faded Background */}
      <div className="relative w-full py-20 md:py-28 lg:py-32 flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <video 
            src="/Contact-us/Contact-us-be-the-cant.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]/70"></div>
          
          {/* Industrial Grid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
          {/* Animated Scanning Line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="absolute left-0 right-0 h-[2px] bg-rpm-maroon/50 shadow-[0_0_15px_rgba(204,0,0,0.5)] z-0"
          ></motion.div>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Corner Accents */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-rpm-maroon/50 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-rpm-maroon/50 hidden md:block"></div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest text-white mb-8 drop-shadow-2xl" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>
              Contact <span className="text-[#540214] font-bold text-[1.1em]">RPM</span>
            </h1>
            
            <div className="relative bg-[#141414]/80 border border-white/10 p-6 md:p-8 backdrop-blur-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rpm-maroon to-transparent opacity-50"></div>
              <p className="text-lg md:text-xl text-[#ebedef] font-light leading-relaxed max-w-3xl mx-auto text-left">
                "We look forward to serving you and learning how we can help with your capital machinery or service project. At RPM, we strive to make every project mutually beneficial and a great success!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content: Form and Info */}
      <div className="w-full bg-black relative">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative">
          {/* Industrial grid background for the section */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
            
            {/* Left: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-full lg:w-[58%] bg-white p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative rounded-sm border border-white/5 group"
            >
            {/* Industrial accents - Bolts */}
            <div className="absolute top-4 left-4 w-4 h-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#450f1a" className="w-full h-full drop-shadow-sm">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#222" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="#222"/>
              </svg>
            </div>
            <div className="absolute top-4 right-4 w-4 h-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#450f1a" className="w-full h-full drop-shadow-sm">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#222" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="#222"/>
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 w-4 h-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#450f1a" className="w-full h-full drop-shadow-sm">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#222" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="#222"/>
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 w-4 h-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#450f1a" className="w-full h-full drop-shadow-sm">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#222" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="#222"/>
              </svg>
            </div>

            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#540214] via-[#450f1a] to-[#540214] bg-[length:200%_auto] animate-gradient"></div>
            
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-4 text-[#540214] font-bold" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>
                Get in touch for sales, parts, and support
              </h2>
              <p className="text-[#666666] font-light text-xl">
                Fill out the form below and our team will get back to you promptly.
              </p>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:info@rpmachinery.com';
              }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 relative group/input">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#666] group-focus-within/input:text-[#333333] transition-colors">Name *</label>
                  <input type="text" required className="w-full p-4 bg-[#f5f5f5] border-b-2 border-transparent focus:outline-none focus:border-[#333333] focus:bg-[#333333] focus:text-white transition-all text-base rounded-t-md" />
                </div>
                <div className="space-y-2 relative group/input">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#666] group-focus-within/input:text-[#333333] transition-colors">Company</label>
                  <input type="text" className="w-full p-4 bg-[#f5f5f5] border-b-2 border-transparent focus:outline-none focus:border-[#333333] focus:bg-[#333333] focus:text-white transition-all text-base rounded-t-md" />
                </div>
                <div className="space-y-2 relative group/input">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#666] group-focus-within/input:text-[#333333] transition-colors">City</label>
                  <input type="text" className="w-full p-4 bg-[#f5f5f5] border-b-2 border-transparent focus:outline-none focus:border-[#333333] focus:bg-[#333333] focus:text-white transition-all text-base rounded-t-md" />
                </div>
                <div className="space-y-2 relative group/input">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#666] group-focus-within/input:text-[#333333] transition-colors">Department</label>
                  <input type="text" className="w-full p-4 bg-[#f5f5f5] border-b-2 border-transparent focus:outline-none focus:border-[#333333] focus:bg-[#333333] focus:text-white transition-all text-base rounded-t-md" />
                </div>
              </div>
              
              <div className="space-y-2 relative group/input">
                <label className="text-xs font-bold uppercase tracking-widest text-[#666] group-focus-within/input:text-[#333333] transition-colors">Email *</label>
                <input type="email" required className="w-full p-4 bg-[#f5f5f5] border-b-2 border-transparent focus:outline-none focus:border-[#333333] focus:bg-[#333333] focus:text-white transition-all text-base rounded-t-md" />
              </div>
              
              <div className="space-y-2 relative group/input">
                <label className="text-xs font-bold uppercase tracking-widest text-[#666] group-focus-within/input:text-[#333333] transition-colors">Message *</label>
                <textarea required rows={5} className="w-full p-4 bg-[#f5f5f5] border-b-2 border-transparent focus:outline-none focus:border-[#333333] focus:bg-[#333333] focus:text-white transition-all text-base resize-none rounded-t-md"></textarea>
              </div>
              
              <div className="flex items-center space-x-3 pt-2 pb-4">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" id="not-robot-contact" required className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-sm checked:bg-[#540214] checked:border-[#540214] focus:outline-none focus:ring-2 focus:ring-[#540214]/50 transition-all cursor-pointer" />
                  <svg className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <label htmlFor="not-robot-contact" className="text-base text-[#666] cursor-pointer select-none font-medium hover:text-[#1a1a1a] transition-colors">I am not a robot</label>
              </div>
              
              <button type="submit" className="relative overflow-hidden bg-[#222222] text-white py-5 px-12 uppercase tracking-[0.2em] font-bold text-sm hover:bg-[#540214] transition-colors duration-300 w-full sm:w-auto shadow-lg flex items-center justify-center group/btn rounded-md">
                <span className="relative z-10 flex items-center">
                  Send Message
                  <ArrowRight className="ml-3 w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="w-full lg:w-[42%] relative rounded-sm overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a]"
          >
            {/* Innovative Background Elements - Matching Company Overview */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay opacity-30"></div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-rpm-maroon blur-[100px]"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-rpm-maroon blur-[80px]"
              />
            </div>

            <div className="relative z-10 p-8 md:p-10 space-y-10 h-full flex flex-col">
              <div>
                <h3 className="text-lg md:text-xl uppercase tracking-widest text-white font-bold mb-4 leading-relaxed" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>
                  Ready to assist you
                </h3>
                <div className="w-12 h-1 bg-[#540214] mb-6"></div>
                <p className="text-[#ebedef] font-light text-lg md:text-xl leading-relaxed">
                  Whether you have a question about our machinery, need technical support, or want to discuss a custom solution, our team is here to help.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-8 w-full">
                {/* Sales & General */}
                <motion.a 
                  href="mailto:info@rpmachinery.com"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-start gap-5 group p-6 bg-[#222222] backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 hover:border-rpm-maroon transition-all duration-500 relative overflow-hidden"
                >
                  {/* Gray fading effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
                  
                  {/* Hover Maroon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rpm-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#540214] group-hover:text-white transition-all duration-500 text-white shadow-inner relative z-10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-white/60 uppercase tracking-widest mb-1 text-xs">Sales & General Inquiries</h4>
                    <span className="text-white group-hover:text-rpm-maroon transition-colors font-bold text-lg block">info@rpmachinery.com</span>
                  </div>
                </motion.a>
 
                {/* Service & Parts */}
                <motion.a 
                  href="mailto:service@rpmachinery.com"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-start gap-5 group p-6 bg-[#222222] backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 hover:border-rpm-maroon transition-all duration-500 relative overflow-hidden"
                >
                  {/* Gray fading effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
                  
                  {/* Hover Maroon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rpm-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#540214] group-hover:text-white transition-all duration-500 text-white shadow-inner relative z-10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-white/60 uppercase tracking-widest mb-1 text-xs">Service & Replacement Parts</h4>
                    <span className="text-white group-hover:text-rpm-maroon transition-colors font-bold text-lg block">service@rpmachinery.com</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

      {/* Maps Section */}
      <div className="w-full bg-[#450f1a] py-12 md:py-16 relative overflow-hidden">
        {/* Industrial Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565439390118-c22456f115f2?q=80&w=1920&auto=format&fit=crop" 
            alt="Industrial Factory Background" 
            className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#450f1a] via-transparent to-[#450f1a] opacity-80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl uppercase tracking-widest text-[#ebedef] mb-4 drop-shadow-sm text-center" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>
              Our Offices
            </h2>
            <div className="w-24 h-1 bg-[#ebedef] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {/* Office 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.01, backgroundColor: "#2a2a2a" }}
              className="flex flex-col lg:flex-row w-full bg-[#222222] border-t-4 border-[#ebedef] rounded-sm overflow-hidden shadow-2xl group transition-all duration-500"
            >
              <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
                <iframe 
                  src="https://maps.google.com/maps?q=709%20Powerhouse%20Rd,%20Independence,%20VA%2024348&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '250px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                {/* Fading overlay effect */}
                <div className="absolute inset-0 bg-rpm-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ebedef]/5 rounded-bl-full pointer-events-none"></div>
                <h3 className="text-3xl text-[#ebedef] mb-6 relative z-10" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>Corporate Headquarters</h3>
                <div className="space-y-1 text-[#ebedef]/80 font-light text-lg mb-10 relative z-10">
                  <p>709 Powerhouse Rd</p>
                  <p>Independence, VA 24348</p>
                  <p>United States</p>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#540214] fill-current" />
                    <a href="tel:+18447762244" className="text-white hover:text-[#ebedef] transition-colors font-medium">1 (844) 776-2244</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.01, backgroundColor: "#2a2a2a" }}
              className="flex flex-col lg:flex-row-reverse w-full bg-[#222222] border-t-4 border-[#ebedef] rounded-sm overflow-hidden shadow-2xl group transition-all duration-500"
            >
              <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
                <iframe 
                  src="https://maps.google.com/maps?q=506%20Granville%20Ave,%20Enderby,%20BC,%20V0E%201V0,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '250px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                {/* Fading overlay effect */}
                <div className="absolute inset-0 bg-rpm-maroon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ebedef]/5 rounded-bl-full pointer-events-none"></div>
                <h3 className="text-3xl text-[#ebedef] mb-6 relative z-10" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>Electrical & Controls Engineering</h3>
                <div className="space-y-1 text-[#ebedef]/80 font-light text-lg mb-10 relative z-10">
                  <p>506 Granville Ave</p>
                  <p>PO Box 471</p>
                  <p>Enderby, BC, V0E 1V0</p>
                  <p>Canada</p>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#540214] fill-current" />
                    <a href="tel:+12502947771" className="text-white hover:text-[#ebedef] transition-colors font-medium">1 (250) 294-7771</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
