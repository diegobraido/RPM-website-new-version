import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Settings, ArrowRight, Activity, Layers, ShieldCheck, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SlatTable() {
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
              Intermediate Processing
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Slat <span className="text-[#540214]">Table</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Live Surface Lumber Landing Deck.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              RPM's Slat Table is a lumber landing deck with a "live surface" that clears all boards and debris transversely without the risk of debris buildup. Typically located after a gang saw to transition lumber to the trimmer lumber decks.
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
              src="/Products/Slat-table/Slat-table.png" 
              alt="Slat Table" 
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
                Live
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Surface</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Clears all boards and debris transversely</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Zero
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Debris Buildup</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Designed to prevent accumulation of waste</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Built
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Heavy</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Designed for longevity and minimal maintenance</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Specifications Header */}
      <section className="pt-24 pb-12 px-6 md:px-16 bg-gradient-to-b from-black to-[#333333] relative z-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-widest">
            Technical <span className="text-[#540214]">Specifications</span>
          </h2>
          <div className="w-24 h-2 bg-[#540214] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Split-Screen Feature Highlights */}
      <div className="w-full">
        
        {/* Feature 1: Chain and Slat Support Details */}
        <section className="py-24 px-6 md:px-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#222222] to-black opacity-80"></div>
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-[#222222]">
                  <img 
                    src="https://www.rpmachinery.com/images/products/slattable/slattable1.png" 
                    alt="Chain Support" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-[#222222]">
                  <img 
                    src="https://www.rpmachinery.com/images/products/slattable/slattable2.png" 
                    alt="Slat Support" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  Chain and Slat <span className="text-[#540214]">Support</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  Chains are supported by automatically oil-lubricated plastic. Slats are supported by automatically oil-lubricated NITRO PVL plastic. Slats are supported on the return to reduce chain stress and wear.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Lubricated Plastic Support</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Chains and slats are supported by automatically oil-lubricated plastic for smooth operation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <ShieldCheck className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Reduced Wear</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Slats are supported on the return to significantly reduce chain stress and wear over time.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 2: Slat Fastening Details */}
        <section className="py-24 px-6 md:px-16 bg-white relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-multiply"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] border border-black/10 group bg-[#ebedef]">
                  <img 
                    src="https://www.rpmachinery.com/images/products/slattable/slattable3.png" 
                    alt="Slat Fastening" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#222222] mb-6 uppercase tracking-wide">
                  Slat Fastening <span className="text-[#540214]">Details</span>
                </h3>
                <p className="text-[#333333] text-lg mb-8 font-light leading-relaxed">
                  Each slat is securely fastened to the chain using twelve hex head bolts with Nord-Lock wedge lock washers. There are four bolts per chain link, with three chain runs per slat segment.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Settings className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Secure Fastening</h4>
                      <p className="text-[#333333] font-light">Twelve hex head bolts with Nord-Lock wedge lock washers ensure each slat is securely attached.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Layers className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Easy Maintenance</h4>
                      <p className="text-[#333333] font-light">Tapped plates welded to each link allow slats to be fastened from the top or outside for easier installation.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 3: Automatic Lubrication */}
        <section className="py-24 px-6 md:px-16 bg-[#450f1a] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#540214] to-[#450f1a] opacity-80"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-[#222222]">
                  <img 
                    src="https://www.rpmachinery.com/images/products/slattable/slattable4.png" 
                    alt="Automatic Lubrication" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  Automatic <span className="text-black font-bold">Lubrication</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  All bearings and chains are automatically lubricated with grease and oil, ensuring optimal performance and significantly reducing manual maintenance requirements.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Optimal Performance</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Continuous automatic lubrication keeps bearings and chains running smoothly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Settings className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Reduced Maintenance</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Eliminates the need for manual greasing and oiling, saving time and extending equipment life.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

      </div>

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
            Ready to Upgrade Your <span className="font-bold text-[#540214]">Landing Deck?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Contact our team today to discuss how the Slat Table can improve your intermediate processing.
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
