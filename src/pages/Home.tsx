import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import YouTubeLoop from '../components/YouTubeLoop';

const slides = [
  {
    id: "01",
    heading: "Leading the Sawmill Industry",
    text: "Our passion drives us, our teamwork empowers us, and our customers define us as we build world-class machinery for the modern sawmill.",
    buttonText: "About RPM",
    buttonLink: "/about"
  },
  {
    id: "02",
    heading: "Stability, Accuracy, and Results",
    text: "We deliver mechanically simple yet technologically advanced solution-based machinery and equipment used in primary and secondary breakdown processing.",
    buttonText: "Explore our products",
    buttonLink: "/products"
  },
  {
    id: "03",
    heading: "Innovation Leaders and Service Excellence",
    text: "By rethinking traditional concepts, we design revolutionary machinery and deliver industry-leading quality to maximize your operational performance.",
    buttonText: "Contact us",
    buttonLink: "/contact"
  },
  {
    id: "04",
    heading: "Join our Team and Empower your Career",
    text: "Bring your passion to a team dedicated to manufacturing excellence, technical expertise, and industry-leading quality.",
    buttonText: "Explore careers",
    buttonLink: "https://www.paycomonline.net/v4/ats/web.php/portal/CD309BBB65DAB94586988DC202424883/career-page"
  }
];

const productSolutions = [
  {
    title: "Primary Breakdown",
    products: [
      { name: "ProDog", image: "/Products/ProDog/ProDog.png" },
      { name: "ProCanter", image: "/Products/ProCanter/ProCanter.png" }
    ],
    description: "Complete primary breakdown solutions delivering superior log and block control for maximum yield, highest recovery, and uncompromising quality",
    categories: ["Primary Breakdown"]
  },
  {
    title: "Secondary Breakdown",
    products: [
      { name: "ProCenter", image: "/Products/ProCenter/ProCenter.png" },
      { name: "Dynamic Linebar", image: "/Products/Dynamic-linebar/Dynamic-linebar.png" },
      { name: "Precision Scanbelt", image: "/Products/Precision-scanbelt/Precision-scanbelt.png" },
      { name: "ProSaw", image: "/Products/ProSaw/ProSaw.png" }
    ],
    description: "Maximize recovery and minimize downtime with our advanced, compact secondary breakdown machinery, engineered for high-speed cutting, precise curve sawing, and optimized cant handling",
    categories: ["Secondary Breakdown"]
  },
  {
    title: "Intermediate Processing",
    products: [
      { name: "Cant Outfeed Sweep", image: "/Products/Cant-outfeed-sweep/Cant-outfeed-sweep.png" },
      { name: "Slat Table", image: "/Products/Slat-table/Slat-table.png" },
      { name: "ProQ", image: "/Products/ProQ/ProQ.png" }
    ],
    description: "Eliminate bottlenecks and protect lumber quality with precision handling systems designed for high-speed, continuous material flow.",
    categories: ["Intermediate Processing"]
  },
  {
    title: "Automation & Technology",
    products: [
      { name: "Motion Control", image: "/Products/Motion-control/Motion-control.png" },
      { name: "Force Control", image: "/Products/Force-control/Force-control.png" },
      { name: "System Upgrades", image: "/Products/System-upgrades/System-upgrades.png" },
      { name: "Cant Classifier", image: "/Products/Cant-classifier/cant-grading.png" },
      { name: "Species Detection", image: "/Products/Species-detection/Species-detection-camera.png" },
      { name: "Cant Dealer", image: "/Products/Cant-dealer/Cant-Dealer-device.png" },
      { name: "Lumber Backlog Control", image: "/Products/Lumber-backlog-control/Lumber-backlog-control-UI.png" }
    ],
    description: "Maximize productivity and ensure consistent quality with low-maintenance, AI machine vision and precision control systems for automated sorting and grading.",
    categories: ["Automation and Controls", "Technology Systems"]
  },
  {
    title: "Support Systems",
    products: [
      { name: "ProLube", image: "/Products/ProLube/Prolube.png" },
      { name: "HPU", image: "/Products/HPU/HPU.png" },
      { name: "ProOiler", image: "/Products/ProOiler/ProOiler.png" },
      { name: "Panel Design", image: "/Products/Panel-design/Panel-design.png" },
      { name: "Power Management System", image: "/Products/Power-management-system/PMS.png" }
    ],
    description: "Robust power and fluid systems alongside advanced electrical infrastructure to support and drive your entire sawmill operation.",
    categories: ["Support Systems", "Electrical"]
  }
];

const ImageCarousel = ({ products, active }: { products: {name: string, image: string}[], active: boolean }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 1500); // Faster interval: 1.5 seconds
    return () => clearInterval(interval);
  }, [active, products.length]);

  return (
    <div className="w-full h-full relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={products[index].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.8, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full object-contain p-8 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Product Name Overlay */}
      <div className="absolute bottom-6 left-6 z-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold text-rpm-maroon uppercase tracking-[0.3em] mb-2 block">Product Preview</span>
            <h4 className="text-2xl font-display font-bold text-white uppercase tracking-widest">
              {products[index].name}
            </h4>
          </motion.div>
        </AnimatePresence>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-1 bg-rpm-maroon mt-2"
        />
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 right-6 flex gap-2 z-30">
        {products.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-rpm-maroon w-4' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

const OverlappingSection = ({ 
  imageSrc, 
  title, 
  text, 
  linkText, 
  linkUrl, 
  isReversed, 
  bgColor, 
  borderColor, 
  titleColor, 
  textColor, 
  linkColor, 
  linkHoverColor 
}: any) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className={`relative flex flex-col md:flex-row ${isReversed ? 'items-start justify-end' : 'items-end'}`}>
        
        {isReversed ? (
          <>
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className={`w-full md:w-6/12 ${bgColor} p-8 md:p-12 relative z-20 md:-mr-24 md:mt-16 shadow-2xl order-last md:order-first`}
            >
              <h3 className={`${titleColor} text-2xl md:text-3xl uppercase tracking-widest mb-6 font-bold border-l-4 ${borderColor} pl-6 font-display`}>{title}</h3>
              <p className={`mb-6 text-base md:text-lg ${textColor} font-light leading-relaxed`}>{text}</p>
              <Link to={linkUrl} className={`inline-flex items-center text-xs uppercase tracking-widest font-bold ${linkColor} ${linkHoverColor} transition-colors group`}>
                {linkText} <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95, rotate: 2, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-7/12 h-[300px] md:h-[400px] relative z-10"
            >
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover shadow-2xl rounded-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.95, rotate: -2, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-7/12 h-[300px] md:h-[400px] relative z-10"
            >
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover shadow-2xl rounded-sm"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className={`w-full md:w-6/12 ${bgColor} p-8 md:p-12 relative z-20 md:-ml-24 md:-mb-12 shadow-2xl`}
            >
              <h3 className={`${titleColor} text-2xl md:text-3xl uppercase tracking-widest mb-6 font-bold border-l-4 ${borderColor} pl-6 font-display`}>{title}</h3>
              <p className={`mb-6 text-base md:text-lg ${textColor} font-light leading-relaxed`}>{text}</p>
              <Link to={linkUrl} className={`inline-flex items-center text-xs uppercase tracking-widest font-bold ${linkColor} ${linkHoverColor} transition-colors group`}>
                {linkText} <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </>
        )}

      </div>
    </div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSolution, setActiveSolution] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] w-full bg-rpm-black overflow-hidden flex flex-col justify-center -mt-20 pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
          <YouTubeLoop 
            videoId="DBHsrlQRYF8" 
            start={30} 
            end={140} 
            className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] md:w-[150vw] md:h-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-[#1a1a1a]/40 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex items-center h-full">
          {/* Carousel Content */}
          <div className="flex-1 relative h-[400px] flex items-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-full"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase tracking-widest leading-tight mb-6 font-display drop-shadow-xl w-full">
                  {slides[currentSlide].heading}
                </h1>
                <p className="text-2xl md:text-3xl text-[#ebedef] mb-10 font-sans font-light leading-relaxed max-w-3xl border-l-2 border-rpm-maroon pl-6 drop-shadow-md">
                  {slides[currentSlide].text}
                </p>
                
                <div>
                  {slides[currentSlide].buttonLink.startsWith('http') ? (
                    <a href={slides[currentSlide].buttonLink} target="_blank" rel="noreferrer" className="inline-flex items-center bg-rpm-maroon text-white py-4 px-10 uppercase tracking-[0.2em] font-bold text-sm hover:bg-white hover:text-rpm-black transition-all shadow-xl border border-rpm-maroon group">
                      {slides[currentSlide].buttonText}
                      <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link to={slides[currentSlide].buttonLink} className="inline-flex items-center bg-rpm-maroon text-white py-4 px-10 uppercase tracking-[0.2em] font-bold text-sm hover:bg-white hover:text-rpm-black transition-all shadow-xl border border-rpm-maroon group">
                      {slides[currentSlide].buttonText}
                      <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Modern Bottom Navigation Track */}
        <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-rpm-black to-transparent pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-6 flex gap-4 md:gap-8">
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="flex-1 cursor-pointer group" 
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-6xl md:text-8xl font-display font-bold transition-all duration-500 ${currentSlide === index ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-white/20 group-hover:text-white/40'}`}>
                      0{index + 1}
                    </span>
                  </div>
                </div>
                <div className="h-1 w-full bg-white/20 relative overflow-hidden rounded-full">
                  {currentSlide === index && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-rpm-maroon"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alternating Info Sections with Scroll Animations */}
      <div className="bg-[#1a1a1a] border-t border-rpm-maroon/30 overflow-hidden">
        
        {/* Section 1: Why RPM? */}
        <OverlappingSection 
          imageSrc="/Why-RPM.jpg"
          title="Why RPM ?"
          text="Serving the North American market, RPM delivers high-performance machinery and comprehensive support. Our unified team of engineers and manufacturing experts is dedicated to a single goal: providing industry-leading quality and service to support your operations 24/7."
          linkText="Learn more about RPM"
          linkUrl="/about"
          isReversed={false}
          bgColor="bg-rpm-maroon"
          borderColor="border-[#333333]"
          titleColor="text-white"
          textColor="text-[#ebedef]"
          linkColor="text-white"
          linkHoverColor="hover:text-[#333333]"
        />

        {/* Section 2: Industry Experts */}
        <OverlappingSection 
          imageSrc="/industry-experts-section.jpg"
          title="Industry Experts"
          text="With a foundation built on technical expertise and innovation, RPM is at the forefront of manufacturing innovation. We engineer and build the market's most advanced and high-performance machinery, tailored specifically to your production needs."
          linkText="View Our Technology"
          linkUrl="/products"
          isReversed={true}
          bgColor="bg-[#0a0a0a]"
          borderColor="border-rpm-maroon"
          titleColor="text-white"
          textColor="text-[#ebedef]"
          linkColor="text-white"
          linkHoverColor="hover:text-rpm-maroon"
        />
      </div>

      {/* Product Solutions Section - Redesigned for Innovation & Interactivity */}
      <section 
        className={`py-24 relative overflow-hidden transition-colors duration-700 ${activeSolution !== null ? 'bg-black' : 'bg-[#111111]'}`} 
        id="rpm-solutions"
        onMouseLeave={() => setActiveSolution(null)}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>
        
        {/* Dynamic Background Glow */}
        <motion.div 
          animate={{ 
            opacity: activeSolution !== null ? 0.15 : 0,
            scale: activeSolution !== null ? 1.2 : 1
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-rpm-maroon rounded-full blur-[200px] pointer-events-none z-0"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tighter mb-4">
                RPM <span className="text-rpm-maroon">Solutions</span>
              </h2>
              <div className="w-32 h-1.5 bg-rpm-maroon rounded-full mb-6"></div>
              <p className="text-xl text-[#8C9291] max-w-2xl font-light leading-relaxed">
                Precision engineering meets intelligent automation. Explore our world-class sawmill breakdown and processing systems.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side: Interactive List */}
            <div className="w-full lg:w-1/2 space-y-4">
              {productSolutions.map((solution, index) => {
                const isActive = activeSolution === index;
                return (
                  <motion.div 
                    key={index}
                    onMouseEnter={() => setActiveSolution(index)}
                    onClick={() => navigate('/products', { state: { categories: solution.categories } })}
                    className={`relative p-6 md:p-8 cursor-pointer group transition-all duration-500 border-l-4 rounded-r-xl ${
                      isActive 
                        ? 'bg-black border-rpm-maroon shadow-[20px_0_50px_rgba(0,0,0,0.5)]' 
                        : 'bg-[#450f1a] border-transparent hover:bg-black/40'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className={`text-3xl font-display font-bold transition-colors duration-300 ${
                          isActive ? 'text-[#450f1a]' : 'text-white'
                        }`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-xl md:text-2xl font-display font-bold uppercase tracking-widest transition-all duration-300 ${
                          isActive ? 'text-white scale-105' : 'text-white/90'
                        }`}>
                          {solution.title}
                        </h3>
                      </div>
                      <motion.div 
                        animate={{ rotate: isActive ? 0 : -45, scale: isActive ? 1.2 : 1 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border ${isActive ? 'bg-rpm-maroon border-rpm-maroon text-white' : 'border-white/20 text-white/40'}`}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 overflow-hidden"
                        >
                          <p className="text-[#8C9291] font-light leading-relaxed text-base md:text-lg pr-12">
                            {solution.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {solution.categories.map((cat, i) => (
                              <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 bg-rpm-maroon/20 border border-rpm-maroon/30 text-rpm-maroon rounded-full">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side: Cinematic Preview Area */}
            <div className="w-full lg:w-1/2 sticky top-24 hidden lg:block">
              <div className="relative aspect-video bg-black rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
                <AnimatePresence mode="wait">
                  {activeSolution !== null ? (
                    <motion.div
                      key={activeSolution}
                      initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      {/* Image Carousel */}
                      <ImageCarousel products={productSolutions[activeSolution].products} active={true} />

                      {/* HUD Elements */}
                      <div className="absolute inset-0 z-20 pointer-events-none">
                        {/* Corner Brackets */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rpm-maroon/50"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rpm-maroon/50"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rpm-maroon/50"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rpm-maroon/50"></div>
                        
                        {/* Scanning Line */}
                        <motion.div 
                          animate={{ top: ['0%', '100%', '0%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-[1px] bg-rpm-maroon/30 shadow-[0_0_10px_rgba(84,2,20,0.5)] z-30"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full h-full flex flex-col items-center justify-center text-center p-12 bg-[#050505]"
                    >
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 0.5, 0.3],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                      >
                        <img 
                          src="/Logo-footer.png" 
                          alt="RPM Solutions" 
                          className="w-64 h-auto opacity-20 grayscale brightness-200"
                          referrerPolicy="no-referrer"
                        />
                        {/* Glitch effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-rpm-maroon/10 to-transparent mix-blend-overlay"></div>
                      </motion.div>
                      
                      <div className="mt-8 flex flex-col items-center gap-2">
                        <div className="h-[1px] w-12 bg-rpm-maroon/40"></div>
                        <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em] animate-pulse">
                          System Idle // Waiting for Input
                        </p>
                      </div>

                      {/* Corner Brackets for the idle state too, to keep it consistent */}
                      <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
                        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/30"></div>
                        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/30"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/30"></div>
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/30"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Technical Spec Grid Below Image */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-1 bg-white/5 relative overflow-hidden">
                    <motion.div 
                      animate={{ left: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute top-0 bottom-0 w-1/2 bg-rpm-maroon/30"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service & Support and Contact Us Split Section */}
      <div className="flex flex-col lg:flex-row w-full overflow-hidden bg-[#ebedef]">
        
        {/* Left: Service and Support */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 relative bg-[#333333] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]"
        >
          {/* Faded Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/RPM-Service-Support.jpg" 
              alt="Service and Support" 
              className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#333333] via-[#333333]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-display uppercase tracking-widest mb-4 leading-tight drop-shadow-lg">
              RPM Service and Support
            </h2>
            <div className="w-16 h-1 bg-[#450f1a] mb-6"></div>
            <p className="text-base md:text-lg font-light leading-relaxed mb-8 text-[#ebedef] drop-shadow-md">
              Our team is committed to driving your success with reliable sawmill expertise, proactive maintenance, and replacement parts that maximize operational performance and safety at every stage.
            </p>
            <Link 
              to="/service-support" 
              className="inline-flex items-center bg-[#540214] text-white py-3 px-6 uppercase tracking-widest font-bold text-xs hover:bg-[#7a031d] transition-colors shadow-xl group"
            >
              Learn More about our Service and Support
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right: Contact Us */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 bg-[#ebedef] text-[#1a1a1a] p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]"
        >
          <div className="max-w-3xl mx-auto w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl font-display uppercase tracking-widest mb-3 text-[#450f1a]">
              Get in touch for sales, parts, and support
            </h2>
            <p className="text-base md:text-lg font-medium mb-8 text-[#333333] italic border-l-4 border-[#450f1a] pl-4">
              Our goal is not to simply build the most... Our mission is to passionately build the best!
            </p>

            <div className="flex flex-col xl:flex-row gap-8 xl:gap-10">
              {/* Form */}
              <div className="flex-1">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:info@rpmachinery.com';
                  }}
                  className="space-y-3"
                >
                  <input type="text" placeholder="Name *" required className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-[#450f1a] focus:ring-1 focus:ring-[#450f1a] transition-all text-sm" />
                  <input type="text" placeholder="Company" className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-[#450f1a] focus:ring-1 focus:ring-[#450f1a] transition-all text-sm" />
                  <input type="text" placeholder="City" className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-[#450f1a] focus:ring-1 focus:ring-[#450f1a] transition-all text-sm" />
                  <input type="text" placeholder="Department" className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-[#450f1a] focus:ring-1 focus:ring-[#450f1a] transition-all text-sm" />
                  <input type="email" placeholder="Email *" required className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-[#450f1a] focus:ring-1 focus:ring-[#450f1a] transition-all text-sm" />
                  <textarea placeholder="Message *" required rows={3} className="w-full p-3 bg-white border border-gray-300 focus:outline-none focus:border-[#450f1a] focus:ring-1 focus:ring-[#450f1a] transition-all text-sm resize-none"></textarea>
                  <div className="flex items-center space-x-2 pt-1 pb-1">
                    <input type="checkbox" id="not-robot" required className="w-4 h-4 text-[#450f1a] border-gray-300 rounded focus:ring-[#450f1a] cursor-pointer" />
                    <label htmlFor="not-robot" className="text-xs text-[#333333] cursor-pointer select-none font-medium">I am not a robot</label>
                  </div>
                  <button type="submit" className="bg-[#1a1a1a] text-white py-3 px-8 uppercase tracking-widest font-bold text-xs hover:bg-[#450f1a] transition-colors w-full sm:w-auto shadow-lg">
                    Send
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="font-bold text-[#450f1a] uppercase tracking-wider mb-1 text-xs">Sales and General Inquiries</h4>
                  <a href="mailto:info@rpmachinery.com" className="text-[#333333] text-sm hover:text-[#450f1a] transition-colors font-medium">info@rpmachinery.com</a>
                </div>
                <div>
                  <h4 className="font-bold text-[#450f1a] uppercase tracking-wider mb-1 text-xs">Service and Replacement Parts</h4>
                  <a href="mailto:service@rpmachinery.com" className="text-[#333333] text-sm hover:text-[#450f1a] transition-colors font-medium">service@rpmachinery.com</a>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-2xl md:text-3xl font-display uppercase tracking-widest text-[#450f1a] mb-2 drop-shadow-sm">RPM Locations</h3>
                  <div className="w-12 h-1 bg-[#333333] mb-4"></div>
                </div>

                <div>
                  <h4 className="font-bold text-[#450f1a] uppercase tracking-wider mb-1 text-xs">Corporate Headquarters and Manufacturing Operations</h4>
                  <p className="text-[#333333] text-sm leading-relaxed">709 Powerhouse Rd, Independence, VA 24348</p>
                  <p className="text-[#333333] text-sm font-medium mt-0.5">1 (844) 776-2244</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#450f1a] uppercase tracking-wider mb-1 text-xs">Electrical and Controls Engineering</h4>
                  <p className="text-[#333333] text-sm leading-relaxed">506 Granville Ave, Enderby, BC, Canada</p>
                  <p className="text-[#333333] text-sm leading-relaxed">PO Box 471, Enderby, BC, V0E 1V0, Canada</p>
                  <p className="text-[#333333] text-sm font-medium mt-0.5">1 (250) 294-7771</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Showcase Teaser Section */}
      <div className="py-24 bg-black relative overflow-hidden flex items-center justify-center border-t border-b border-[#222]">
        {/* Industrial Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Animated Sawing Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#333] -translate-y-1/2 z-0">
          <motion.div 
            animate={{ left: ['-10%', '110%', '-10%'] }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
          >
             <div className="w-48 h-[2px] bg-rpm-maroon shadow-[0_0_15px_rgba(204,0,0,0.8)] absolute"></div>
             
             {/* Half-visible rotating saw */}
             <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-24 h-12 overflow-hidden z-10">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                 className="w-24 h-24 text-rpm-maroon drop-shadow-[0_0_8px_rgba(204,0,0,0.6)] origin-center"
               >
                 <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                   <path d="M 50 10 A 40 40 0 1 1 49.9 10 Z M 50 20 A 30 30 0 1 0 50.1 20 Z M 15 45 L 5 35 L 18 38 M 25 25 L 12 15 L 28 22 M 40 12 L 30 2 L 45 12 M 60 12 L 70 2 L 55 12 M 75 25 L 88 15 L 72 22 M 85 45 L 95 35 L 82 38 M 15 55 L 5 65 L 18 62 M 25 75 L 12 85 L 28 78 M 40 88 L 30 98 L 45 88 M 60 88 L 70 98 L 55 88 M 75 75 L 88 85 L 72 78 M 85 55 L 95 65 L 82 62" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fillRule="evenodd" />
                 </svg>
               </motion.div>
             </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black py-12 px-8 md:px-16 border border-[#333] shadow-2xl relative"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-rpm-maroon"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-rpm-maroon"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-rpm-maroon"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-rpm-maroon"></div>

            <h2 className="text-3xl md:text-5xl font-display text-white uppercase tracking-widest mb-6" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>
              RPM <span className="text-rpm-maroon">Equipment</span> Showcase
            </h2>
            <p className="text-[#a0a0a0] text-base md:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Witness the power, precision, and reliability of our machinery. Explore our latest video demonstrations and read success stories from our partners.
            </p>
            <Link 
              to="/showcase" 
              className="inline-flex items-center px-8 py-4 bg-rpm-maroon text-white text-sm uppercase tracking-widest font-bold hover:bg-[#450f1a] transition-colors group border border-rpm-maroon hover:border-[#450f1a]"
            >
              What our Clients Say <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
