import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, Zap, Settings, ArrowRight, ArrowLeft, PlayCircle, Maximize2, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProDog() {
  const [activeTab, setActiveTab] = useState(0);

  const specs = [
    {
      title: "Charging System",
      items: [
        "Scanning done upstream giving optimizer 2-4 seconds of solution time",
        "Logs come in with consistent log line",
        "Charging yokes and infeed equipment controlled by electric servo",
        "Optimized pre-rotation is done in turner arm before final positioning",
        "Final positioning and rotation offsets calculated while log is clamped",
        "All Electric X-Y Turning Yokes rotate logs an additional +/- 30 degrees",
        "Zero backlash roller pinion actuates yokes in/out and up/down",
        "Dual servo motors clamp and rotate logs with minimal following error"
      ]
    },
    {
      title: "Carriages & Drives",
      items: [
        "Constructed of 3\", 2.5\", and 1.5\" thick 7075-T6 Aluminum",
        "Ride on Thomson Roller RoundWay bearings for high speed and long life",
        "Driven by oversized 150mm wide timing belts with higher load ratings",
        "Dog arm utilizes over-center cam geometry to lock in down position",
        "All-electric actuation of carriage travel and dog arm lift/lower",
        "Each carriage driven by large servo motor and gearbox with low backlash",
        "Belt tensioning done at carriage to allow head and tail to stay fixed"
      ]
    },
    {
      title: "Beam Structure",
      items: [
        "Double-stacked 8” by 10” by 1/2” HSS Tube and 3” solid steel plate",
        "Precision machined in one setup after fabrication",
        "Top and Bottom Thomson RoundWays bolt to a single 3” vertical plate",
        "Timing belts run inside the beam structure, kept out of harms way",
        "Support structure made from 6” by 10” by 1/2” HSS tube and heavy plate"
      ]
    },
    {
      title: "Cutting Tools",
      items: [
        "Canter heads counter-rotate for equal chipping force",
        "All cutting tools are driveline driven for simplicity",
        "Profiler tools independently positioned for slewed sideboard solutions",
        "Two movable saw boxes instead of conventional fixed arbor moving guides",
        "Top arbor offset automatically adjusted to eliminate saw mismatch",
        "Arbors can be configured as a twin or quad",
        "24” Diameter Saws with a .150” Kerf sawing Southern Yellow Pine"
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
        {/* Background Video/Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#222222] z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#222222] via-[#222222]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-transparent to-transparent z-10"></div>
          <img 
            src="/Products/ProDog/ProDog-Frame.png" 
            alt="ProDog Frame" 
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[90%] lg:w-[60%] h-auto object-contain opacity-60 z-0 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        
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

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#540214]/20 border border-[#540214]/50 text-[#FFB6C1] text-sm font-bold tracking-[0.2em] uppercase mb-6 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFC0CB] animate-pulse"></span>
              Primary Breakdown
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-widest leading-[0.9] mb-8 drop-shadow-2xl">
              Pro<span className="text-[#540214]">Dog</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-[#EBEDEF] mb-8 leading-tight">
              Unmatched precision and maximum recovery.
            </h2>
            <p className="text-xl md:text-2xl text-[#8C9291] font-light mb-12 max-w-2xl leading-relaxed">
              A complete primary breakdown solution offering piece counts and gaps comparable to sharp-chain-style systems, where full rotation of logs gives the highest recovery possible.
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
                20<span className="text-3xl text-[#450f1a]">-22</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Logs Per Minute</div>
              <p className="text-[#333333] text-sm mt-3 font-light">High-speed production capability</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                3<span className="text-4xl text-[#450f1a]">%</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Increase in Recovery</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Due to log positioning accuracy</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-[#540214] mb-2 tracking-tighter flex items-center gap-1">
                8.5<span className="text-3xl text-[#450f1a]">ft</span>
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#450f1a]">Compact Footprint</div>
              <p className="text-[#333333] text-sm mt-3 font-light">Canting, profiling, and quad saw box</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Split-Screen Feature Highlights */}
      <div className="w-full">
        
        {/* Feature 1: Core Capability */}
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
                    src="https://www.youtube-nocookie.com/embed/jDVvLtqREzQ?rel=0&autoplay=0&mute=1&loop=1&playlist=jDVvLtqREzQ" 
                    title="ProDog Production" 
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
                  Core <span className="text-[#540214]">Capability</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  The dual carriage system provides canting, double profiling, and a quad saw box in only 8.5 feet with critical components located above the cutting tools and debris.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Maximize2 className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Short Overall Footprint</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Compared to sharp-chain-style systems, saving valuable mill floor space.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">No Rotation Limitations</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Overcomes log instability issues common on sharp chains.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 2: Charging System */}
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
                    src="https://www.youtube-nocookie.com/embed/vsvsPV2AbTU?rel=0&autoplay=0&mute=1&loop=1&playlist=vsvsPV2AbTU" 
                    title="ProDog Start-Up" 
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
                  Charging <span className="text-[#540214]">System</span>
                </h3>
                <p className="text-[#333333] text-lg mb-8 font-light leading-relaxed">
                  Upstream scanning gives the optimizer 2 to 4 seconds of solution time as logs come in with a consistent log line and optimized pre-rotation is done in the turner arm.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Activity className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">All-Electric X-Y Turning Yokes</h4>
                      <p className="text-[#333333] font-light">Rotate logs an additional +/- 30 degrees for final correction.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#450f1a] flex items-center justify-center flex-shrink-0 border border-[#540214]">
                      <Settings className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-[#222222] font-bold text-lg mb-1">Dual Servo Motors</h4>
                      <p className="text-[#333333] font-light">Clamp and rotate logs with minimal following error.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature 3: 5-Way Outfeed Dispatch */}
        <section className="py-24 px-6 md:px-16 bg-[#450f1a] relative">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5 flex flex-col gap-8"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/fLAZ5FxjuUw?rel=0&autoplay=1&mute=1&loop=1&playlist=fLAZ5FxjuUw" 
                    title="ProDog 5-Way Outfeed Dispatch 1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                  <iframe 
                    className="w-full h-full absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://www.youtube-nocookie.com/embed/TIiLlAe9L34?rel=0&autoplay=1&mute=1&loop=1&playlist=TIiLlAe9L34" 
                    title="ProDog 5-Way Outfeed Dispatch 2" 
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
                className="w-full lg:w-2/5"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                  5-Way <span className="text-black font-bold">Outfeed Dispatch</span>
                </h3>
                <p className="text-[#EBEDEF] text-lg mb-8 font-light leading-relaxed">
                  A 5-way outfeed uses inertia separators below the feedline to divert boards to five different downstream locations like the backline, re-saw, or board edger.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Layers className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Inertia Separators</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Efficiently divert boards/flitches to the desired location below the feedline.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#540214] flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Zap className="w-5 h-5 text-[#FFB6C1]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Seamless Integration</h4>
                      <p className="text-[#EBEDEF]/80 font-light">Connects directly to downstream processing without bottlenecks.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

      </div>

      {/* Interactive Technical Specifications */}
      <section id="specs" className="py-32 px-6 md:px-16 bg-gradient-to-b from-black to-[#333333] border-t border-black/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-widest mb-6">
              Technical <span className="text-[#540214]">Specifications</span>
            </h2>
            <div className="w-24 h-2 bg-[#540214] mx-auto rounded-full"></div>
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
                      : 'bg-[#333333] border-transparent hover:bg-[#222222] text-[#EBEDEF]'
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
                  className="bg-white border border-black/5 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center"
                >
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-3xl font-display font-bold text-[#222222] mb-8 border-b border-black/10 pb-6">
                      {specs[activeTab].title}
                    </h3>
                    <ul className="flex flex-col gap-6">
                      {specs[activeTab].items.map((item, idx) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={idx} 
                          className="flex items-start gap-4 group"
                        >
                          <div className="mt-1 w-6 h-6 rounded-full bg-[#540214]/10 flex items-center justify-center flex-shrink-0 border border-[#540214]/30 group-hover:bg-[#540214] transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-[#540214] group-hover:text-white" />
                          </div>
                          <span className="text-[#333333] text-lg font-light leading-relaxed group-hover:text-[#222222] transition-colors">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-3/5 h-full min-h-[500px] lg:min-h-[650px] rounded-2xl overflow-hidden relative shadow-2xl border border-white/5 bg-[#0a0a0a]">
                    {/* Premium Background Elements */}
                    <div className="absolute inset-0 z-0 opacity-40">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-rpm-maroon blur-[120px]"
                      />
                    </div>
                    
                    {activeTab === 1 ? (
                      <video 
                        src="/Products/ProDog/Carriages-Drives.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain relative z-10"
                      />
                    ) : (
                      <img 
                        src={
                          activeTab === 0 ? "/Products/ProDog/ProDog-Charging-System.png" :
                          activeTab === 2 ? "/Products/ProDog/ProDog-Beam-structure.png" :
                          "/Products/ProDog/ProDog-Cutting-tool.png"
                        }
                        alt={specs[activeTab].title}
                        className="absolute inset-0 w-full h-full object-contain p-8 relative z-10"
                        referrerPolicy="no-referrer"
                      />
                    )}
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
            Ready to maximize your <span className="font-bold text-[#540214]">Recovery?</span>
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            Connect with our sales team to discuss the return on investment and how the ProDog can transform your primary breakdown process.
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
