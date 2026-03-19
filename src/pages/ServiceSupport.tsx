import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Crosshair, MonitorPlay, ArrowUpCircle, ArrowDownCircle, Zap, ArrowRight, Settings, Users, ShieldCheck, Lightbulb, PhoneCall, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import YouTubeLoop from '../components/YouTubeLoop';

const getSectionStyle = (index: number) => {
  const styles = [
    { 
      bg: 'bg-[#111111]', hex: '#111111',
      text: 'text-white', 
      subText: 'text-gray-300', 
      accent: 'text-rpm-maroon', 
      border: 'border-white/5', 
      btnBg: 'bg-rpm-maroon', 
      btnText: 'text-white', 
      btnHover: 'hover:bg-white hover:text-rpm-black',
      numberColor: 'text-white/[0.1]'
    },
    { 
      bg: 'bg-[#f8f9fa]', hex: '#f8f9fa',
      text: 'text-rpm-black', 
      subText: 'text-gray-600', 
      accent: 'text-rpm-maroon', 
      border: 'border-black/5', 
      btnBg: 'bg-rpm-black', 
      btnText: 'text-white', 
      btnHover: 'hover:bg-rpm-maroon hover:text-white',
      numberColor: 'text-black/[0.1]'
    },
    { 
      bg: 'bg-[#2a010a]', hex: '#2a010a',
      text: 'text-white', 
      subText: 'text-white/80', 
      accent: 'text-white', 
      border: 'border-white/10', 
      btnBg: 'bg-white', 
      btnText: 'text-rpm-black', 
      btnHover: 'hover:bg-rpm-black hover:text-white',
      numberColor: 'text-white/[0.1]'
    },
    { 
      bg: 'bg-[#e0e3e6]', hex: '#e0e3e6',
      text: 'text-rpm-black', 
      subText: 'text-gray-700', 
      accent: 'text-rpm-maroon', 
      border: 'border-black/10', 
      btnBg: 'bg-rpm-maroon', 
      btnText: 'text-white', 
      btnHover: 'hover:bg-rpm-black hover:text-white',
      numberColor: 'text-black/[0.1]'
    },
  ];
  return styles[index % styles.length];
};

const ServiceFeature: React.FC<{ feature: any, index: number }> = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  const style = getSectionStyle(index);
  const isTechnicalConsultation = feature.title === "Technical Consultation";
  const isEndToEndSupport = feature.title === "End-to-End Customer Support";
  const isInstallationCommissioning = feature.title === "Installation & Commissioning";

  return (
    <section className={`relative w-full overflow-hidden ${isTechnicalConsultation ? 'bg-black' : style.bg} py-16 lg:py-24 transition-colors duration-500`}>
      {/* Background large number */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] lg:text-[12rem] font-display font-bold ${isTechnicalConsultation ? 'text-white/[0.02]' : style.numberColor} pointer-events-none z-0 select-none transition-colors duration-500`}>
        0{index + 1}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`relative max-w-[90rem] mx-auto px-6 lg:px-12 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center z-10`}
      >
        {/* Image Side */}
        <div className="w-full lg:w-[60%] relative group">
          {/* Innovative Offset Frame */}
          <div className={`absolute top-6 ${isEven ? '-left-6' : '-right-6'} w-full h-full border-2 ${isTechnicalConsultation ? 'border-white/10' : style.border} rounded-2xl z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2`} />
          
          <div className={`absolute -inset-4 ${isTechnicalConsultation ? 'bg-[#450f1a]/20' : style.bg === 'bg-[#2a010a]' ? 'bg-black/30' : 'bg-rpm-maroon/20'} blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0`} />
          
          <div className="relative aspect-[16/9] lg:aspect-[16/7] rounded-2xl p-[2px] bg-gradient-to-br from-white/20 via-transparent to-black/50 group-hover:from-rpm-maroon/50 group-hover:to-rpm-maroon/20 transition-all duration-500 shadow-2xl z-10">
            <div className="w-full h-full rounded-xl overflow-hidden bg-black relative">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500" style={{ boxShadow: `inset 0 0 80px 40px ${isTechnicalConsultation ? '#000000' : style.hex}` }} />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <feature.icon className={`w-10 h-10 ${isTechnicalConsultation ? 'text-[#450f1a]' : style.accent}`} />
              <h2 className={`text-3xl lg:text-4xl font-display font-bold ${isTechnicalConsultation ? 'text-white' : style.text} uppercase tracking-widest leading-tight drop-shadow-sm`}>
                {feature.title}
              </h2>
            </div>
            
            <div className={`w-16 h-1 ${isTechnicalConsultation ? 'bg-[#450f1a]' : style.bg === 'bg-[#2a010a]' ? 'bg-white/50' : 'bg-rpm-maroon'} mb-8`}></div>
            
            <div className={`text-lg lg:text-xl ${isTechnicalConsultation ? 'text-[#ebedef]' : style.subText} font-light mb-8 leading-relaxed space-y-4`}>
              {feature.description.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {feature.list && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {feature.list.map((item: any, i: number) => {
                  const Icon = item.icon || ShieldCheck;
                  return (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-10 h-10 rounded-full ${isTechnicalConsultation || isEndToEndSupport ? 'bg-[#450f1a] border-[#540214]' : 'bg-rpm-maroon/10 border-rpm-maroon/20'} flex items-center justify-center flex-shrink-0 border shadow-lg`}>
                        <Icon 
                          className={`w-5 h-5 ${isEndToEndSupport ? 'text-[#FFC0CB] stroke-[3px]' : isTechnicalConsultation ? 'text-[#FFB6C1]' : 'text-rpm-maroon'}`} 
                        />
                      </div>
                      <p className={`text-base lg:text-lg font-light ${isTechnicalConsultation || isEndToEndSupport ? 'text-[#ebedef]' : style.subText} leading-tight pt-1`}>
                        {item.text || item}
                      </p>
                    </motion.li>
                  );
                })}
              </ul>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default function ServiceSupport() {
  const serviceFeatures = [
    {
      title: "End-to-End Customer Support",
          icon: Users,
          image: "/End-to-end-support.png",
          description: [
            "Backed by decades of sawmill expertise, our mission is to deliver the industry's most reliable support before, during, and long after your purchase. We keep your operations running smoothly with:"
          ],
          list: [
            { text: "Rapid on-call and remote technical assistance", icon: PhoneCall },
            { text: "Custom service contracts and mechanical/electrical replacement parts", icon: FileText },
            { text: "Precision laser alignments, routine maintenance, and equipment conversions", icon: Crosshair },
            { text: "Expert consultation and technical training", icon: Lightbulb }
          ]
        },
        {
          title: "Installation & Commissioning",
          icon: Settings,
          image: "/Installation-commissioning.png",
          description: [
            "Our installation process is built around a single goal: minimizing your downtime. We get your mill back up and running faster through:"
          ],
          list: [
            { text: "Drop-in ready designs that fit existing gang lines without costly modifications", icon: ArrowDownCircle },
            { text: "Plug-and-play delivery, with all machinery arriving pre-wired and factory-tested", icon: Zap },
            { text: "Expert execution from the industry’s most focused and experienced commissioning teams", icon: ShieldCheck }
          ]
        },
    {
      title: "Service & Replacement Parts",
      icon: ShieldCheck,
      image: "/Replacement-parts.png",
      description: [
        "As a world-class manufacturer, RPM provides mechanical / electrical service & replacement parts for its own primary and secondary breakdown products.",
        "We offer flexible service contracts to our customers to provide training & periodic service visits catered to each customer's requirements."
      ]
    },
    {
      title: "Technical Consultation",
      icon: Lightbulb,
      image: "/Technical-consultation.jpg",
      description: [
        "At RPM, our team utilizes decades of experience and knowledge of new technologies in providing our customers the industry’s most trusted and valued equipment, advisement and consultation."
      ]
    }
  ];

  return (
    <div className="bg-[#ebedef] min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <video 
            src="/Contact-us/Contact-us-be-the-cant.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]/70"></div>
          
          {/* Industrial Grid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
          
          {/* Animated Scanning Line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="absolute left-0 right-0 h-[2px] bg-rpm-maroon/50 shadow-[0_0_15px_rgba(204,0,0,0.5)] z-0"
          ></motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 bg-[#ebedef] text-sm md:text-base font-sans font-bold tracking-[0.2em] text-rpm-black uppercase mb-6 backdrop-blur-md rounded-full shadow-2xl">
              <Wrench className="w-4 h-4 text-rpm-maroon" />
              RPM Service and Support
            </div>
            
            <div className="flex items-center gap-4 md:gap-6 mb-6">
              <img src="/Logo-footer.png" alt="RPM Logo" className="h-16 md:h-24 w-auto object-contain" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-widest drop-shadow-2xl">
                Protect Your <span className="text-rpm-maroon">Investment</span>
              </h1>
            </div>
            
            <div className="w-20 h-1 bg-rpm-maroon mb-6 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-[#ebedef] font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Our relentless customer service ensures peak operating performance and reliable production yields—before, during, and long after the sale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections (Zig-Zag) */}
      <div className="relative z-20">
        {serviceFeatures.map((feature, index) => (
          <ServiceFeature key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-[#333333] relative overflow-hidden border-t-8 border-[#540214]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl text-white mb-6 uppercase tracking-wider font-bold" style={{ fontFamily: '"Copperplate Gothic", "Copperplate", sans-serif' }}>
                Need Technical Assistance?
              </h2>
              <p className="text-[#ebedef]/80 text-lg md:text-xl font-light leading-relaxed">
                Our support team is ready to help you with any technical questions or service requirements. We are committed to keeping your operations running smoothly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className="px-10 py-5 bg-[#540214] text-white font-bold uppercase tracking-widest rounded-full transition-all shadow-lg flex items-center justify-center gap-3 hover:bg-[#450f1a] hover:-translate-y-1"
              >
                <PhoneCall className="w-5 h-5" />
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

