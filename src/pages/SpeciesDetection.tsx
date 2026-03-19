import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Settings, ArrowRight, Activity, Layers, ShieldCheck, Crosshair, Network, Cpu, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpeciesDetection() {
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
              Machine Vision Systems
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Species <span className="text-[#540214]">Detection</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Artificial Intelligence Species Classification.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              Real time species classification that can run up to 250 lugs per minute. Double layered artificial intelligence has species detection accuracy &gt; 98.5%.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#540214] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#450f1a] transition-all duration-300 shadow-[0_0_30px_rgba(84,2,20,0.4)] hover:shadow-[0_0_40px_rgba(84,2,20,0.6)] hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative z-20"
          >
            <img 
              src="/Products/Species-detection/Species-detection-camera.png" 
              alt="Species Detection Scanner" 
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
                250
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Lugs / Min</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Real time species classification at high speeds</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                &gt;98.5%
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Accuracy</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Double layered artificial intelligence</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                PoE
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Camera</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Single cable run from computer to camera</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Specifications - Modern Grid Layout */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-[#333333] relative z-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#111111] opacity-80"></div>
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              System <span className="text-[#540214]">Features</span>
            </h2>
            <div className="w-24 h-2 bg-[#540214] mx-auto rounded-full"></div>
            <p className="text-[#8C9291] mt-6 max-w-2xl mx-auto font-light text-lg">
              High-speed, high-accuracy species detection powered by advanced AI and intuitive controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Simple Installation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#EBEDEF] rounded-3xl p-8 md:p-10 border border-black/5 shadow-2xl relative group overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#540214]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#540214]/20"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#450f1a] flex items-center justify-center mb-8 border border-[#540214] shadow-lg relative z-10">
                <Settings className="w-8 h-8 text-[#FFB6C1]" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10">
                Hardware <span className="text-[#540214]">Integration</span>
              </h3>
              
              <ul className="space-y-4 relative z-10 mt-auto flex-grow">
                <li className="flex items-start gap-3">
                  <Network className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#333333] font-light text-sm">Power over Ethernet camera only requires a single cable run from the computer to camera</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#333333] font-light text-sm">Two 24" light bars utilize lenses that focus the light into the camera field of view to better control the lighting environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#333333] font-light text-sm">System operates on its own dedicated computer</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: User Interface */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#EBEDEF] rounded-3xl p-8 md:p-10 border border-black/5 shadow-2xl relative group overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#540214]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#540214]/20"></div>
              
              <img 
                src="/Products/Species-detection/Species-detection-UI.png" 
                alt="Species Detection GUI" 
                className="w-full h-48 object-cover rounded-xl mb-8 border border-black/10 shadow-sm"
                referrerPolicy="no-referrer"
              />
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10">
                User <span className="text-[#540214]">Interface</span>
              </h3>
              
              <ul className="space-y-4 relative z-10 mt-auto flex-grow">
                <li className="flex items-start gap-3">
                  <Sliders className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#333333] font-light text-sm">Simple user interface allows users to monitor and configure the system with ease</span>
                </li>
                <li className="flex items-start gap-3">
                  <Crosshair className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#333333] font-light text-sm">Adjustable parameters allow the user to tune the system for the desired species sorting</span>
                </li>
              </ul>
            </motion.div>

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
            Ready to Improve Your <span className="font-bold text-[#540214]">Boards Sorting and Drying?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss how Species Detection can integrate into your existing line and maximize your recovery.
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
