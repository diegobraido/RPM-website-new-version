import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Settings, ArrowRight, Activity, Layers, ShieldCheck, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PanelDesign() {
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
              Panel Design <span className="text-[#540214]">and Build</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Professionally fabricated custom panels.
            </h2>
            
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
              src="/Products/Panel-design/Panel-design.png" 
              alt="Panel Design" 
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications - Modern Grid Layout */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-[#333333] relative z-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ebedef] to-[#d1d5db] opacity-80"></div>
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-xl relative group overflow-hidden flex flex-col transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#540214]/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#540214]/10"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#540214] flex items-center justify-center mb-8 border border-[#540214] shadow-lg relative z-10">
                <Settings className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10">
                Panel Design <span className="text-[#540214]">and Build</span>
              </h3>
              
              <ul className="space-y-4 relative z-10 mt-auto">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">Professionally fabricated custom panels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">CSA Certified Panels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">Thoroughly tested and inspected before delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">High quality components and enclosures</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-xl relative group overflow-hidden flex flex-col transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#540214]/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-[#540214]/10"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#540214] flex items-center justify-center mb-8 border border-[#540214] shadow-lg relative z-10">
                <Layers className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-[#222222] mb-4 uppercase tracking-wide relative z-10">
                High Quality <span className="text-[#540214]">Components</span>
              </h3>
              
              <ul className="space-y-4 relative z-10 mt-auto">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">Allen-Bradley</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">Beckhoff</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">Rittal</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">Weidmüller</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">Bosch</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#540214] flex-shrink-0 mt-0.5" />
                  <span className="text-[#444444] font-light text-sm">ABB</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Electrical Products Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-[#333333] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              Electrical <span className="text-[#540214]">Products</span>
            </h2>
            <div className="w-24 h-2 bg-[#540214] mx-auto rounded-full"></div>
            <p className="text-[#EBEDEF] mt-8 text-lg font-light max-w-2xl mx-auto">
              We provide a wide range of high-quality electrical components and custom-built panels for various industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "HMI", img: "HMI.png" },
              { name: "IO Enclosures", img: "IO-enclosures.png" },
              { name: "Junction Boxes", img: "Junction-boxes.png" },
              { name: "Operator Console", img: "Operator-console.png" },
              { name: "PLC Enclosures", img: "PLC-enclosures.png" },
              { name: "Servo & VFD Drives", img: "Servo-VFD-drives.png" }
            ].map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group border border-white/10 bg-[#EBEDEF] hover:bg-[#540214] transition-colors duration-500"
              >
                <div className="absolute top-6 left-0 w-full text-center z-20">
                  <p className="text-black font-display font-bold text-xl uppercase tracking-widest group-hover:text-white transition-colors duration-500">{product.name}</p>
                </div>
                <img 
                  src={`/Products/Panel-design/${product.img}`} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-12 pt-16 transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
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
            Ready to Upgrade Your <span className="font-bold text-[#540214]">Panels?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss how we can upgrade your system and maximize your recovery.
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
