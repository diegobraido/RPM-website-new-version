import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Settings, ArrowRight, Activity, Layers, ShieldCheck, Crosshair, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';
import YouTubeLoop from '../components/YouTubeLoop';

export default function CantDealer() {
  return (
    <div className="min-h-screen bg-[#333333] text-white font-sans selection:bg-[#540214] selection:text-white">
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col lg:flex-row overflow-hidden bg-[#222222]">
        <div className="fixed top-24 left-4 z-50">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#540214] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#450f1a] transition-all duration-300 shadow-[0_0_30px_rgba(84,2,20,0.4)] hover:shadow-[0_0_40px_rgba(84,2,20,0.6)] hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>

        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end px-6 lg:pr-16 py-32 z-20">
          {/* Background for Left Column */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#222222] to-[#111111] z-10"></div>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-[#540214] blur-[180px]"
              />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-2xl relative z-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#540214]/20 border border-[#540214]/50 text-[#FFB6C1] text-sm font-bold tracking-[0.2em] uppercase mb-6 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFC0CB] animate-pulse"></span>
              Machine Vision Systems
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Cant <span className="text-[#540214]">Dealer</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Advanced 3D Scanner & Cant Singulation.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              The Cant Dealer uses an advanced 3D scanner to automatically process a single cant from a backlog into a specified queuing system. This system reduces cross-ups and maximizes operational uptime.
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
        </div>

        {/* Right Column: Video Player */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full bg-black overflow-hidden">
          <YouTubeLoop 
            videoId="lzjYi6nUOX0" 
            start={0} 
            end={120} 
            className="absolute top-0 left-0 w-full h-full" 
          />
          {/* Cinematic Overlay */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_40px_rgba(0,0,0,1)] z-10"></div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_80px_rgba(0,0,0,0.8)] z-10"></div>
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
                3D
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Scanning</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Overcomes challenges associated with changing environments</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Max
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Throughput</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Continuous and consistent feeding of the machine</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Zero
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Cross-ups</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Prevents cross-ups caused by operator errors</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Specifications - Modern Grid Layout */}
      <section className="py-24 px-6 md:px-16 bg-black relative z-20 overflow-hidden">
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
            <div className="w-24 h-1 bg-[#540214] mx-auto rounded-full"></div>
            <p className="text-[#8C9291] mt-6 max-w-2xl mx-auto font-light text-lg">
              Advanced 3D scanning and intelligent software ensure continuous operation and maximum throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Continuous Feeding */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#EBEDEF] rounded-3xl p-8 md:p-10 border border-black/5 shadow-2xl relative group overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#540214]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#540214]/20"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#450f1a] flex items-center justify-center mb-8 border border-[#540214] shadow-lg relative z-10">
                <Activity className="w-8 h-8 text-[#FFB6C1]" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10">
                Continuous <span className="text-[#540214]">Feeding</span>
              </h3>
              
              <p className="text-[#333333] font-light leading-relaxed mb-8 relative z-10 flex-grow">
                Maximizes throughput by ensuring continuous and consistent feeding of the machine, even when the operator is occupied with other tasks.
              </p>
              
              <ul className="space-y-4 relative z-10 mt-auto">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#333333] font-light text-sm">Prevents cross-ups caused by operator errors</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: 3D Scanning System */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#EBEDEF] rounded-3xl p-8 md:p-10 border border-black/5 shadow-2xl relative group overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#540214]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#540214]/20"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#450f1a] flex items-center justify-center mb-8 border border-[#540214] shadow-lg relative z-10">
                <Crosshair className="w-8 h-8 text-[#FFB6C1]" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10">
                3D Scanning <span className="text-[#540214]">System</span>
              </h3>
              
              <p className="text-[#333333] font-light leading-relaxed mb-8 relative z-10 flex-grow">
                3D scanning system overcomes challenges associated with changing environments, unlike traditional vision systems.
              </p>
            </motion.div>

            {/* Card 3: User Interface */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#EBEDEF] rounded-3xl p-8 md:p-10 border border-black/5 shadow-2xl relative group overflow-hidden flex flex-col md:col-span-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#540214]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#540214]/20"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="w-full md:w-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-[#450f1a] flex items-center justify-center mb-8 border border-[#540214] shadow-lg">
                    <MonitorPlay className="w-8 h-8 text-[#FFB6C1]" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide">
                    Intuitive <span className="text-[#540214]">User Interface</span>
                  </h3>
                  
                  <p className="text-[#333333] font-light leading-relaxed">
                    Intuitive user interface enables easy monitoring and configuration of the system, showing the detection of the first and second cants and their orientation.
                  </p>
                </div>
                
                <div className="w-full md:w-1/2">
                  <img 
                    src="/Products/Cant-dealer/Cant-dealer-UI.png" 
                    alt="Cant Dealer GUI" 
                    className="w-full h-auto object-cover rounded-xl border border-black/10 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
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
            Ready to Improve Your <span className="font-bold text-[#540214]">Cants Singulation?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss how the Cant Dealer can integrate into your existing line and maximize your recovery.
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
