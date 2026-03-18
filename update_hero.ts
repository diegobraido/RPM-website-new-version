import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');

const pages = [
  'ProDog.tsx', 'ProCanter.tsx', 'ProCenter.tsx', 'DynamicLinebar.tsx', 'ProSaw.tsx',
  'CantOutfeedSweep.tsx', 'SlatTable.tsx', 'ProQ.tsx', 'ProLube.tsx', 'HPU.tsx',
  'ProOiler.tsx', 'MotionControl.tsx', 'ForceControl.tsx', 'SystemUpgrades.tsx',
  'PanelDesign.tsx', 'PowerManagementSystems.tsx', 'CantClassifier.tsx',
  'SpeciesDetection.tsx', 'CantDealer.tsx', 'LumberBacklogControl.tsx', 'ScanBelt.tsx'
];

const z0Regex = /(<div className="absolute inset-0 z-0[^>]*>[\s\S]*?)(<\/div>\s*<div className="max-w-7xl mx-auto px-6 relative z-20)/;

const replacement = `$1
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
$2`;

for (const page of pages) {
  const filePath = path.join(pagesDir, page);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${page}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if it already has the animated background elements
  if (content.includes("Animated Background Elements") && content.includes("blur-[180px]")) {
    // Check if it's in the hero section or just the CTA
    const heroSectionMatch = content.match(/\{\/\*\s*Immersive Hero Section\s*\*\/\}\s*<section[^>]*>([\s\S]*?)<div className="max-w-7xl mx-auto px-6 relative z-20/);
    if (heroSectionMatch && heroSectionMatch[0].includes("Animated Background Elements")) {
      console.log(`Already updated ${page}`);
      continue;
    }
  }
  
  if (z0Regex.test(content)) {
    content = content.replace(z0Regex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${page}`);
  } else {
    console.log(`Could not find z-0 container in ${page}`);
  }
}
