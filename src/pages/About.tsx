import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Handshake, Users2, ShieldAlert } from 'lucide-react';
import YouTubeLoop from '../components/YouTubeLoop';

const RPMIcon = ({ className, size }: { className?: string, size?: number }) => (
  <img 
    src="/Logo-footer.png" 
    alt="RPM Icon" 
    style={{ width: size, height: size }}
    className={`object-contain ${className || ''}`} 
  />
);

export default function About() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://youtu.be/DBHsrlQRYF8?t=30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-rpm-black text-[#ebedef] font-sans">
      
      {/* Hero & Overview Combined Section */}
      <div className="relative w-full flex flex-col lg:flex-row">
        {/* Left Column (Text & Backgrounds) */}
        <div className="relative w-full lg:w-1/2 flex flex-col">
          {/* Backgrounds for Left Column */}
          <div className="absolute inset-0 flex flex-col z-0">
            {/* Top Half Background (Who We Are) */}
            <div className="relative flex-1 bg-gradient-to-br from-[#ebedef] to-[#222222] overflow-hidden">
            </div>
            {/* Bottom Half Background (Company Overview) */}
            <div className="relative flex-1 bg-[#0a0a0a] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-rpm-maroon blur-[180px]"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-rpm-maroon blur-[150px]"
                />
              </div>
            </div>
          </div>

          {/* Content for Left Column */}
          <div className="relative z-10 flex flex-col px-6 lg:pl-[max(1.5rem,calc(50vw-40rem))] lg:pr-12">
            {/* Who We Are Text */}
            <div className="pt-32 pb-16 lg:pb-24 flex flex-col justify-center min-h-[50vh]">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-6xl font-display uppercase tracking-widest text-white font-bold mb-4 drop-shadow-lg">
                  Who We Are
                </h1>
                <div className="w-24 h-2 bg-rpm-maroon shadow-sm"></div>
              </motion.div>
            </div>
            
            {/* Company Overview Text */}
            <div className="pt-16 lg:pt-24 pb-24 flex flex-col justify-center min-h-[50vh]">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-10 bg-rpm-maroon"></div>
                  <h2 className="text-2xl md:text-3xl lg:text-[1.7rem] xl:text-4xl text-white uppercase tracking-widest font-display font-bold whitespace-nowrap">
                    Company Overview
                  </h2>
                </div>
                <div className="mb-8">
                  <img src="/Logo-footer.png" alt="RPM Logo" className="h-16 w-auto object-contain" />
                </div>
                
                <p className="text-lg text-[#ebedef] font-light leading-relaxed mb-6">
                  <span className="bg-[#333] px-2 py-1 rounded shadow-sm"><strong className="text-white font-bold">Real Performance Machinery</strong></span> is a world-class manufacturer of capital equipment specifically for the wood production industry. We specialize in high-value, technologically advanced machinery and solution-based equipment for both primary and secondary breakdown processing.
                </p>
                <p className="text-lg text-[#ebedef] font-light leading-relaxed">
                  Our vision has always been focused on delivering know-how, speed, precision, and robustness to every project we undertake.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column (Video) */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-black overflow-hidden">
          <YouTubeLoop 
            videoId="DBHsrlQRYF8" 
            start={30} 
            end={140} 
            className="absolute top-0 left-0 w-full h-full" 
          />
          {/* Fade border overlay */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_40px_rgba(0,0,0,1)] z-10"></div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_80px_rgba(0,0,0,0.8)] z-10"></div>
        </div>
      </div>

      {/* Mission & Vision Split Section */}
      <div className="grid md:grid-cols-2 bg-rpm-black">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative p-16 md:p-24 flex flex-col justify-center items-start group overflow-hidden border-r border-[#333] bg-[#450f1a]"
        >
          {/* Hover Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-rpm-maroon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
            <motion.h2 variants={itemLeftVariants} className="text-4xl uppercase tracking-widest mb-6 font-display text-white flex items-center gap-4">
              <span className="w-8 h-1 bg-rpm-silver inline-block transition-all duration-500 group-hover:w-16"></span>
              Mission
            </motion.h2>
            <motion.p variants={itemLeftVariants} className="text-[#ebedef] text-xl leading-relaxed font-light">To design, build, and deliver quality products and services that exceed expectations through industry collaboration, passion, and teamwork.</motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative p-16 md:p-24 flex flex-col justify-center items-start group overflow-hidden bg-[#ebedef]"
        >
          {/* Hover Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-bl from-rpm-silver/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
            <motion.h2 variants={itemRightVariants} className="text-4xl uppercase tracking-widest mb-6 font-display text-[#540214] font-bold flex items-center gap-4">
              <span className="w-8 h-1 bg-[#450f1a] inline-block transition-all duration-500 group-hover:w-16"></span>
              Vision
            </motion.h2>
            <motion.p variants={itemRightVariants} className="text-[#222222] text-xl leading-relaxed font-light">To be recognized as the most trustworthy machinery manufacturer while providing first-class customer service.</motion.p>
          </div>
        </motion.div>
      </div>

      {/* Culture & Values Section */}
      <div className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        {/* Background matching Company Overview */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-rpm-maroon blur-[180px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-rpm-maroon blur-[150px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl uppercase tracking-widest mb-6 font-display text-white font-bold">Culture & Values</h2>
            <p className="text-xl md:text-2xl text-[#ebedef]">RPM emphasizes a culture of <span className="bg-[#540214] text-white px-3 py-1 rounded shadow-sm font-bold font-display">"uncompromising truth"</span>.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Relationships and Trust", desc: "Earn trust and build long-term relationships with our customers", icon: Handshake },
              { title: "Teamwork and Growth", desc: "Cultivate a culture of continuous improvement and mutual success through open-mindedness and dedicated mentorship", icon: Users2 },
              { title: "Respect and Safety", desc: "Maintain a safe and unified workplace grounded in mutual respect and uncompromising truth", icon: ShieldAlert }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-gradient-to-br from-[#333333] via-[#222222] to-[#111111] p-10 rounded-2xl border border-white/10 hover:border-rpm-maroon hover:bg-none hover:bg-[#450f1a] transition-all duration-500 shadow-2xl group relative overflow-hidden min-h-[400px] flex flex-col justify-center"
              >
                {/* Gray fading effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                <div className="absolute top-0 left-0 w-full h-1.5 bg-rpm-silver group-hover:bg-white transition-colors duration-500 z-10"></div>
                
                <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-20 transition-all duration-700 z-10 transform group-hover:rotate-12 group-hover:scale-110">
                  <value.icon size={180} />
                </div>

                <div className="mb-8 inline-block p-6 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors duration-500 relative z-10 self-start">
                  <value.icon className="text-rpm-silver group-hover:text-white transition-colors duration-500" size={48} />
                </div>

                <h4 className="text-2xl md:text-3xl font-display font-bold uppercase mb-6 text-white tracking-wider relative z-10 leading-tight">{value.title}</h4>
                <p className="text-lg md:text-xl text-[#ebedef] font-light leading-relaxed relative z-10 drop-shadow-md group-hover:text-white transition-colors">{value.desc}</p>
                
                {/* Hover Maroon Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-rpm-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality and Operational Excellence Section */}
      <div className="bg-[#1a1a1a] py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -left-40 -top-40 w-96 h-96 bg-rpm-maroon/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-rpm-silver/5 rounded-tl-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pr-0 lg:pr-8"
            >
              <h2 className="text-3xl md:text-4xl text-white uppercase tracking-widest mb-6 font-display font-bold max-w-md">
                Quality and <br/> Operational Excellence
              </h2>
              <div className="w-16 h-1 bg-rpm-maroon mb-8"></div>
              
              <div className="space-y-6">
                <p className="text-lg text-[#ebedef] font-light leading-relaxed">
                  State-of-the-art manufacturing facilities with complete mechanical and electrical engineering design, manufacturing and services including PLC/HMI programming, on-site project management, validations, and planned maintenance.
                </p>
                <div className="p-6 bg-[#ebedef] border-l-4 border-[#540214] rounded-r-lg shadow-lg">
                  <p className="text-lg text-[#333333] font-medium leading-relaxed">
                    Delivering operational excellence through tracked metrics to reduce costs that provide higher ROI to our customers. On-time delivery while providing customers the least amount of downtime from product delivery, installation, and commissioning.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-rpm-maroon/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src="/Quality-Manufacturing.png" 
                  alt="Quality Manufacturing" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating stat card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-[#450f1a] p-6 rounded-xl border border-[#333] shadow-2xl"
              >
                <div className="text-4xl font-display font-bold text-white mb-2 pb-2 border-b-2 border-rpm-silver inline-block">100%</div>
                <div className="text-sm uppercase tracking-wider text-[#ebedef] font-bold mt-1">Commitment to Quality</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-gradient-to-br from-[#222222] to-[#450f1a] py-12 md:py-16 relative border-t-4 border-rpm-maroon overflow-hidden">
        {/* Fading effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
        
        {/* Background Grid Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20" style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl uppercase tracking-widest mb-8 font-display text-white border-b-4 border-white pb-4 inline-block"
          >
            Leadership Team
          </motion.h2>
          
          <div className="space-y-6 md:space-y-8">
            {[
              {
                name: "Shawn Guibergia",
                title: "Founder",
                desc: "Mechanical engineer and entrepreneur with over 30 years of experience in world-class machinery design for lumber production.",
                image: "/Shawn-Guibergia.png"
              },
              {
                name: "Richard Vetter",
                title: "Chief Executive Officer",
                desc: "Highly skilled controls engineer with 20 years of experience developing automation systems for sawmill equipment.",
                image: "/Richard-Vetter.png"
              },
              {
                name: "Nick Thuemler",
                title: "VP of Engineering",
                desc: "Innovator with over 15 years in the industry. Holds multiple patents and specializes in optimizing sawmill layouts.",
                image: "/Nick-Thuemler.png"
              }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                whileHover={{ scale: 1.01, backgroundColor: "#222222" }}
                className="flex flex-col md:flex-row bg-gradient-to-br from-[#333333] via-[#222222] to-[#111111] border border-white/10 p-6 md:p-8 relative shadow-2xl hover:border-rpm-maroon transition-all duration-500 group rounded-xl overflow-hidden"
              >
                {/* Gray fading effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Hover Maroon Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-rpm-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="md:w-1/3 mb-6 md:mb-0 md:border-r-4 border-[#540214] md:pr-8 flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-6">
                    <img src={leader.image} alt={leader.name} className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-rpm-maroon shadow-lg transform group-hover:scale-105 transition-transform duration-500" />
                    <div>
                      <h3 className="text-2xl font-display uppercase font-bold text-white group-hover:text-rpm-maroon transition-colors">{leader.name}</h3>
                      <span className="text-[#ebedef] uppercase font-bold text-xs tracking-widest mt-1 block">{leader.title}</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8 flex items-center relative z-10">
                  <p className="text-[#ebedef] text-lg font-light leading-relaxed group-hover:text-white transition-colors">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
