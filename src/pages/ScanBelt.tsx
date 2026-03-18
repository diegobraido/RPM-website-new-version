import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Settings, ArrowRight, Activity, Layers, ShieldCheck, Crosshair, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScanBelt() {
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
              Secondary Breakdown
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Precision <span className="text-[#540214]">Scan Belt</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Stable Scanning. Lower Maintenance.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              Machined bed and rails ensure proper belt tracking and stable scanning, while our Poly-Chain drive system and protected photo eyes reduce downtime and maintenance.
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
              src="/Products/Precision-scanbelt/Precision-scanbelt.png" 
              alt="Precision Scan Belt" 
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
                Stable
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Tracking</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Machined bed and rails for proper belt tracking</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Low
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Maintenance</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Poly-Chain drive system outperforms traditional chains</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Quick
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Belt Changes</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Side rails do not need to be removed for belt replacement</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section id="specs" className="py-24 px-6 md:px-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#450f1a] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-6">
              Technical <span className="text-[#450f1a]">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#450f1a] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Stable Scanning */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#ebedef] p-10 rounded-3xl shadow-xl border border-black/5"
            >
              <h3 className="text-2xl font-display font-bold text-[#333333] mb-6 uppercase tracking-wide">
                Stable <span className="text-[#450f1a]">Scanning</span>
              </h3>
              <div className="w-20 h-1.5 bg-[#450f1a] mb-8"></div>
              <p className="text-[#333333] text-lg mb-8 font-light leading-relaxed">
                Machined bed and rails guarantee proper belt tracking and stable scanning, ensuring accurate data collection for the optimizer.
              </p>
              <ul className="space-y-6">
                {[
                  { text: "Machined bed and rails for proper belt tracking", icon: Crosshair },
                  { text: "Ensures stable scanning for accurate data collection", icon: Activity },
                  { text: "Reduces errors and improves optimizer performance", icon: Target }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#450f1a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#540214] transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#333333] font-light text-lg pt-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Low Maintenance Drive */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#ebedef] p-10 rounded-3xl shadow-xl border border-black/5 relative overflow-hidden"
            >
              {/* Background Texture */}
              <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-[#333333] mb-6 uppercase tracking-wide">
                  Low Maintenance <span className="text-[#450f1a]">Drive</span>
                </h3>
                <div className="w-20 h-1.5 bg-[#450f1a] mb-8"></div>
                <p className="text-[#333333] text-lg mb-8 font-light leading-relaxed">
                  The Poly-Chain drive system is significantly lower maintenance than traditional chain drive systems, providing smooth and consistent power transmission.
                </p>
                <ul className="space-y-6">
                  {[
                    { text: "Poly-Chain drive system is lower maintenance than traditional chain drive systems", icon: Settings },
                    { text: "Provides smooth and consistent power transmission", icon: Zap },
                    { text: "Protected photo eyes reduce unexpected downtime", icon: ShieldCheck },
                    { text: "Side rails do not need to be removed for belt replacement", icon: Layers }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-[#450f1a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#540214] transition-colors duration-300 border border-black/10">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[#333333] font-light text-lg pt-2">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conversion Focus CTA */}
      <section className="py-24 px-6 md:px-16 bg-[#540214] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-white/5 rotate-12 blur-3xl"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-black/10 -rotate-12 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-widest drop-shadow-lg">
            Ready to Upgrade Your <span className="text-[#333333]">Scan Belt?</span>
          </h2>
          <p className="text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss how the Precision Scan Belt can integrate into your existing line and maximize your recovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#540214] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#EBEDEF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+18005551234" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white/30 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Call Sales
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
