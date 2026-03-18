import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PowerManagementSystems() {
  const [activeTab, setActiveTab] = useState(0);

  const specs = [
    {
      title: "Power Management Options",
      items: [
        "Decentralized: Peak shaving at the machine center utilizing energy storage in conjunction with the DC bus of a VFD or servo drive.",
        "Centralized: At the utility connection to the plant, using energy storage systems that can manage peak shaving and power factor improvement."
      ]
    },
    {
      title: "Enabling Technology",
      items: [
        "Bosch ML Drive: Common hardware for active front end or inverter",
        "Up to 540 kW per drive, stackable for up to 4 MW total power",
        "Mains current control mode that can independently control reactive and active current",
        "DC Bus Energy Storage Options: Super capacitor, Super battery, Li-ion battery, Kinetic buffering"
      ]
    },
    {
      title: "Design Process",
      items: [
        "Thorough understanding of the plant's processes is required to accurately dimension a power management system.",
        "RPM collects live data from existing systems to design and accurately determine what level of 'peak shaving' is achievable.",
        "Using proprietary software and modeling packages, along with measured field data, we generate a system model.",
        "The model provides design parameters for the energy storage medium, drive power supplies, and inverters."
      ]
    },
    {
      title: "Decentralized Power Management",
      items: [
        "Peak shaving utilizing DC bus energy storage in conjunction with VFDs or servo drives",
        "Active front end with regenerative power supply and near unity power factor",
        "Multi-inverter load sharing via common DC bus",
        "Compliant with IEEE 519 Total Harmonic Distortion Requirements (Typically <2.5% THD)"
      ]
    },
    {
      title: "Centralized Power Management",
      items: [
        "Non-intrusive to the plant's operation",
        "Connection point on the AC bus of the plant",
        "Modular and scalable to suit the customer's needs",
        "Can be implemented with decentralized power management systems",
        "Remote diagnostic capacity, service, and data acquisition",
        "Available range of voltages: 460-600 VAC"
      ]
    },
    {
      title: "Example Application",
      items: [
        "Decentralized Power Management completed in 2021",
        "System Topology: (4) 300HP induction motors on chipping heads, (1) 540 kW regenerative power supply",
        "(18) 102V 88F supercapacitors (2 parallel strings of 9), (4) 430 kW inverters connected to a common DC bus",
        "Results: 41% decrease in peak demand, more peak power available for motors on the same machine PDC",
        "Improved machine performance, variable speed on large motors, improved chip quality, increased feed speeds"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#333333] text-white font-sans selection:bg-[#540214] selection:text-white">
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#222222]">
        <div className="fixed top-24 left-4 z-50">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#540214] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#450f1a] transition-all duration-300 shadow-[0_0_30px_rgba(84,2,20,0.4)] hover:shadow-[0_0_40px_rgba(84,2,20,0.6)] hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#222222] via-[#222222]/90 to-[#222222]/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent z-10"></div>
        
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-[#540214] blur-[180px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#540214] blur-[150px]"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-32 pb-20 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#540214]/20 border border-[#540214]/50 text-[#FFB6C1] text-sm font-bold tracking-[0.2em] uppercase mb-6 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFC0CB] animate-pulse"></span>
              Automation
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Power <span className="text-[#540214]">Management</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Intelligent management of available energy.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              RPM believes the greenest energy is the energy that isn't consumed, and that intelligent management of available energy is paramount for the future. Peak shaving, power factor correction, and load leveling are the areas that RPM will pursue in a variety of industries.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#540214] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#450f1a] transition-all duration-300 shadow-[0_0_30px_rgba(84,2,20,0.4)] hover:shadow-[0_0_40px_rgba(84,2,20,0.6)] hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#specs" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#7F7F7F] text-[#EBEDEF] text-sm font-bold uppercase tracking-widest rounded-full hover:border-[#EBEDEF] hover:bg-white/5 transition-all duration-300"
              >
                View Specs
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 80 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative z-20"
          >
            <img 
              src="/Products/Power-management-system/PMS.png" 
              alt="Power Management" 
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Metric Callout Banners */}
      <section className="py-12 bg-[#EBEDEF] relative z-30 -mt-8 mx-6 md:mx-16 rounded-3xl shadow-2xl border border-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-black/10">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Peak
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Shaving</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Utilizing energy storage in conjunction with VFDs</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Power
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Factor Correction</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Improving power factor for highly efficient machines</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Load
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Leveling</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Intelligent management of available energy</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Technical Specifications */}
      <section id="specs" className="py-32 px-6 md:px-16 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#540214] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-6">
              Technical <span className="text-[#540214]">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#540214] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="w-full lg:w-1/4 flex flex-col gap-4">
              {specs.map((spec, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left px-8 py-6 rounded-2xl transition-all duration-300 border ${
                    activeTab === index 
                      ? 'bg-[#450f1a] border-[#540214] shadow-[0_0_30px_rgba(84,2,20,0.3)] text-white' 
                      : 'bg-[#111111] border-white/5 hover:bg-[#222222] text-[#EBEDEF]'
                  }`}
                >
                  <h3 className="text-xl font-bold uppercase tracking-wider">
                    {spec.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#ebedef] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-12"
                >
                  <div className="w-full">
                    <h3 className="text-3xl font-display font-bold text-[#333333] mb-8 border-b border-black/10 pb-6">
                      {specs[activeTab].title}
                    </h3>
                    <div className="flex flex-col md:flex-row gap-12">
                      <div className={activeTab === 5 ? "w-full md:w-1/2" : "w-full"}>
                        <ul className="flex flex-col gap-6">
                          {specs[activeTab].items.map((item, idx) => (
                            <motion.li 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              key={idx} 
                              className="flex items-start gap-4 group"
                            >
                              <div className="mt-1 w-6 h-6 rounded-full bg-[#450f1a]/10 flex items-center justify-center flex-shrink-0 border border-[#450f1a]/30 group-hover:bg-[#450f1a] transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-[#450f1a] group-hover:text-white" />
                              </div>
                              <span className="text-[#333333] text-lg font-light leading-relaxed group-hover:text-black transition-colors">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      {activeTab === 5 && (
                        <div className="w-full md:w-1/2">
                          <img 
                            src="/Products/Power-management-system/PMS-results.png" 
                            alt="Example Application Results" 
                            className="w-full h-auto object-cover rounded-2xl shadow-xl border border-black/10"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Focus CTA */}
      <section className="py-16 px-6 md:px-16 relative overflow-hidden bg-[#0a0a0a]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-[#540214] blur-[180px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#540214] blur-[150px]"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-6 drop-shadow-lg">
            Ready to become more <span className="font-bold text-[#540214]">energy efficient?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Connect with our sales team to discuss the return on investment and how our Power Management Systems can transform your process.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#450f1a] text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#540214] hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Contact us to learn more
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

    </div>
  );
}
