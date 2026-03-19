import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Settings, ArrowRight, Activity, Layers, ShieldCheck, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MotionControl() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#222222] via-[#222222]/80 to-transparent z-10"></div>
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
              Motion <span className="text-[#540214]">Control</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Electric and Hydraulic Motion Control Solutions.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              RPM prides itself on having a team of motion control experts to help design new systems and troubleshoot existing ones. Both hydraulic and electric motion control have been applied to many different applications since our inception in 2008. We can integrate motion control technologies from Bosch, Rockwell, Delta RMC, TwinCAT, and others to meet and exceed our customers’ requirements.
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
              src="/Products/Motion-control/Motion-control.png" 
              alt="Motion Control" 
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
                &lt; 0.001"
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Following Error</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Near-perfect accuracy with electric motion control</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Real-Time
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Diagnostics</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Monitoring and diagnostics help troubleshoot and reduce downtime</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Force
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Control</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Highly accurate position and force control functionality</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Specifications - Modern Grid Layout */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-[#333333] relative z-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-black opacity-80"></div>
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              Motion Control <span className="text-[#450f1a]">Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-[#450f1a] mx-auto rounded-full"></div>
            <p className="text-[#8C9291] mt-6 max-w-2xl mx-auto font-light text-lg">
              Explore our electric and hydraulic motion control capabilities designed for precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Electric Motion Control */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#ebedef] rounded-3xl p-8 md:p-10 border border-black/5 shadow-2xl relative group overflow-hidden flex flex-col transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#450f1a]/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#450f1a] flex items-center justify-center mb-8 border border-[#450f1a] shadow-lg relative z-10 transition-transform duration-500">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10 transition-colors duration-300">
                Electric <span className="text-[#450f1a]">Motion Control</span>
              </h3>
              
              <p className="text-[#333333] font-light leading-relaxed mb-8 relative z-10 flex-grow transition-colors duration-300">
                High-performance electric motion control systems offering unparalleled accuracy, speed, and reliability for demanding applications.
              </p>
              
              <ul className="space-y-4 relative z-10 mt-auto">
                <li className="flex items-start gap-3 group/item">
                  <Crosshair className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">Near-perfect accuracy (&lt; 0.001" following error)</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Activity className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">Unmatched velocity and acceleration capabilities</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <ShieldCheck className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">High reliability and low maintenance</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Settings className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">Real-time monitoring and diagnostics help troubleshoot and reduce downtime</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Hydraulic Motion Control */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#ebedef] rounded-3xl p-8 md:p-10 border border-black/5 shadow-2xl relative group overflow-hidden flex flex-col transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#450f1a]/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#450f1a] flex items-center justify-center mb-8 border border-[#450f1a] shadow-lg relative z-10 transition-transform duration-500">
                <Layers className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10 transition-colors duration-300">
                Hydraulic <span className="text-[#450f1a]">Motion Control</span>
              </h3>
              
              <p className="text-[#333333] font-light leading-relaxed mb-8 relative z-10 flex-grow transition-colors duration-300">
                Robust hydraulic motion control solutions providing precise position and force control, with simplified installation and maintenance.
              </p>
              
              <ul className="space-y-4 relative z-10 mt-auto">
                <li className="flex items-start gap-3 group/item">
                  <Crosshair className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">Highly accurate position control</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Activity className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">Force control functionality</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Settings className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">On-board wiring from cylinder to valve simplifies installation and maintenance</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <ShieldCheck className="w-5 h-5 text-[#450f1a] flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#333333] font-light text-sm transition-colors duration-300">Real-time monitoring and diagnostics help troubleshoot and reduce downtime</span>
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
            Ready to Upgrade your <span className="font-bold text-[#540214]">Controls System?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss how our motion control solutions can integrate into your existing line and maximize your recovery.
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
