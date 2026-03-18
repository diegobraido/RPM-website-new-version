import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');

const pages = [
  {
    file: 'ProLube.tsx',
    titleHtml: `Ready to Upgrade your <span className="font-bold text-[#540214]">Lubrication System?</span>`,
  },
  {
    file: 'HPU.tsx',
    titleHtml: `Ready to Upgrade Your <span className="font-bold text-[#540214]">Hydraulics?</span>`,
  },
  {
    file: 'ProOiler.tsx',
    titleHtml: `Ready to Upgrade your <span className="font-bold text-[#540214]">Lubrication System?</span>`,
  },
  {
    file: 'MotionControl.tsx',
    titleHtml: `Ready to Upgrade your <span className="font-bold text-[#540214]">Controls System?</span>`,
  },
  {
    file: 'ForceControl.tsx',
    titleHtml: `Ready to Upgrade your <span className="font-bold text-[#540214]">Controls System?</span>`,
  },
  {
    file: 'SystemUpgrades.tsx',
    titleHtml: `Ready to Upgrade Your <span className="font-bold text-[#540214]">System?</span>`,
  },
  {
    file: 'PanelDesign.tsx',
    titleHtml: `Ready to Upgrade Your <span className="font-bold text-[#540214]">Panels?</span>`,
  },
  {
    file: 'PowerManagementSystems.tsx',
    titleHtml: `Ready to become more <span className="font-bold text-[#540214]">energy efficient?</span>`,
  },
  {
    file: 'CantClassifier.tsx',
    titleHtml: `Ready to Upgrade your <span className="font-bold text-[#540214]">Cant Grading?</span>`,
  },
  {
    file: 'SpeciesDetection.tsx',
    titleHtml: `Ready to Improve Your <span className="font-bold text-[#540214]">Boards Sorting and Drying?</span>`,
  },
  {
    file: 'CantDealer.tsx',
    titleHtml: `Ready to Improve Your <span className="font-bold text-[#540214]">Cants Singulation?</span>`,
  },
  {
    file: 'LumberBacklogControl.tsx',
    titleHtml: `Ready to Improve Your <span className="font-bold text-[#540214]">Lumber Backlog Control?</span>`,
  }
];

for (const page of pages) {
  const filePath = path.join(pagesDir, page.file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${page.file}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the CTA section. It usually starts with {/* Conversion Focus CTA */}
  // and ends before </div>\n  );\n}
  
  const ctaRegex = /\{\/\*\s*Conversion Focus CTA\s*\*\/\}\s*<section[\s\S]*?<\/section>/i;
  const match = content.match(ctaRegex);
  
  if (match) {
    const ctaContent = match[0];
    
    // Extract description
    const descMatch = ctaContent.match(/<p className="[^"]*">([\s\S]*?)<\/p>/);
    let description = "Connect with our sales team to discuss the return on investment and how our equipment can transform your process.";
    if (descMatch) {
      description = descMatch[1].trim();
    }
    
    const newCta = `{/* Conversion Focus CTA */}
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
            ${page.titleHtml}
          </h2>
          <p className="text-lg text-[#EBEDEF] font-light mb-10 max-w-2xl mx-auto">
            ${description}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#450f1a] text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#540214] hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Contact us to learn more
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>`;
      
    content = content.replace(ctaRegex, newCta);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${page.file}`);
  } else {
    console.log(`Could not find CTA section in ${page.file}`);
  }
}
