import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ChevronRight, CheckCircle2, Zap, Settings, ArrowRight, PlayCircle, Maximize2, Activity, Layers, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import YouTubeLoop from '../components/YouTubeLoop';

export default function ProCenter() {
  const [activeTab, setActiveTab] = useState(0);

  const specs = [
    {
      title: "Fluid Mechanics",
      items: [
        "Hydraulic position and force control of all axes",
        "Press rolls, hold-down skid, and sweep chains combined into one assembly",
        "Press roll assemblies preset to cant thickness",
        "Hold-down skids tied to press rolls to eliminate cant rolling",
        "Infeed lug chain driven by servo-motor for smooth, consistent cant staging",
        "Centering arms take cant from lug chain at matched speeds"
      ]
    },
    {
      title: "Streamlined Upkeep",
      items: [
        "Centering arms tied together with large gears instead of linkages to reduce complexity",
        "Centering arms pivot on 2-15/16” diameter shaft mounted to piloted flange bearings",
        "Bearings automatically lubricated with grease or oil",
        "Uses drop skids instead of pans to guide cants over the center chain",
        "Eliminates complicated chain protector assemblies and linkages"
      ]
    },
    {
      title: "Endurance & Stability",
      items: [
        "No adjusters necessary for center chain; plastic sits in a precision machined groove",
        "Once aligned, the chain never has to be adjusted",
        "Separate drive allows backing up cants without affecting gang flow",
        "Bridge press rolls are interchangeable with combination press rolls",
        "Consistent and steady flow without slamming against cants"
      ]
    }
  ];

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
              Secondary Breakdown
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Pro<span className="text-[#540214]">Center</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              The Ultimate Centering Infeed Table.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              An extremely robust centering, lineal scanning infeed for RPM ProSaw systems. Experience the smoothest operation on the market with all-hydraulic press rolls and force control.
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
        </div>

        {/* Right Column: Video Player */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full bg-black overflow-hidden">
          <YouTubeLoop 
            videoId="ups9XyHcuvY" 
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
                Zero
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Cant Rolling</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Hold-down skids tied to press rolls to eliminate cant rolling</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                100<span className="text-4xl text-[#450f1a]">%</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Hydraulic Control</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Force and position control of all axes for smooth operation</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                Max
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Recovery</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Scanning performed on the same chain that feeds cutting tools</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Split-Screen Feature Highlights */}
      <div className="w-full">
        
        {/* Feature 1: Smooth Operation */}
        <section className="py-24 px-6 md:px-16 bg-[#333333] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#222222] to-[#333333] opacity-80"></div>
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
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/7MC_YozvQcc?rel=0&autoplay=1&mute=1&loop=1&playlist=7MC_YozvQcc" 
                    title="ProCenter Smooth Operation" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  Smooth <span className="text-[#540214]">Operation</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  Engineered for seamless performance. Hydraulic position and force control across all axes ensure the smoothest operation on the market.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Maximize2 className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Unified Assembly</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Press rolls, hold-down skid, and sweep chains combined into one cohesive unit.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Precision Staging</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Infeed lug chain driven by a servo-motor for smooth, consistent cant staging.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 2: Low Maintenance */}
        <section className="py-24 px-6 md:px-16 bg-white relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/Fp4CM1YgENA?rel=0&autoplay=1&mute=1&loop=1&playlist=Fp4CM1YgENA" 
                    title="ProCenter Low Maintenance" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#222222] mb-6 uppercase tracking-wide">
                  Low <span className="text-[#540214]">Maintenance</span>
                </h3>
                <p className="text-[#333333] text-lg mb-8 font-light leading-relaxed">
                  Designed to keep your mill running. We've reduced complexity by tying centering arms together with large gears instead of linkages.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Settings className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Robust Pivots</h4>
                      <p className="text-[#333333] font-light">Centering arms pivot on a 2-15/16” diameter shaft mounted to piloted flange bearings.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Zap className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Simplified Guidance</h4>
                      <p className="text-[#333333] font-light">Uses drop skids instead of pans, eliminating complicated chain protector assemblies.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 3: Reliability */}
        <section className="py-24 px-6 md:px-16 bg-[#450f1a] relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/1zxhg3bPlRE?rel=0&autoplay=1&mute=1&loop=1&playlist=1zxhg3bPlRE" 
                    title="ProCenter Reliability" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  Unmatched <span className="text-[#333333]">Reliability</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  Built for the long haul. The center chain plastic sits in a precision machined groove—once aligned, it never needs adjustment.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <ShieldCheck className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Independent Drive</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Separate drive allows backing up cants without affecting the flow of the gang.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Layers className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Consistent Flow</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Press rolls and centering arms are smooth and never slam against the cants.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

      </div>

      {/* Interactive Technical Specifications */}
      <section id="specs" className="py-24 px-6 md:px-16 bg-black relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              Technical <span className="text-[#540214]">Specifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#540214] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {specs.map((spec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group ${
                    activeTab === idx 
                      ? 'bg-[#540214] text-white shadow-lg scale-105 z-10' 
                      : 'bg-[#333333] text-[#8C9291] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {spec.title}
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === idx ? 'rotate-90 text-[#FFB6C1]' : 'text-[#8C9291] group-hover:text-white group-hover:translate-x-1'}`} />
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#ebedef] rounded-3xl p-8 md:p-12 border border-black/5 shadow-2xl relative overflow-hidden"
                >
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[#222222] mb-8 uppercase tracking-wide flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    {specs[activeTab].title}
                  </h3>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                    {specs[activeTab].items.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-6 h-6 text-[#540214] flex-shrink-0 mt-0.5" />
                        <span className="text-[#333333] font-light leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
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
            Ready to Upgrade your <span className="font-bold text-[#540214]">Infeed?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss how the ProCenter can integrate into your existing line and maximize your recovery.
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
