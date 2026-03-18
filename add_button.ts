import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir);

const exclude = ['Home.tsx', 'About.tsx', 'Contact.tsx', 'Products.tsx', 'ServiceSupport.tsx', 'Showcase.tsx', 'ProDog.tsx'];

const buttonHtml = `
        <div className="absolute top-8 left-6 md:left-12 z-50">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#540214] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#450f1a] transition-all duration-300 shadow-[0_0_30px_rgba(84,2,20,0.4)] hover:shadow-[0_0_40px_rgba(84,2,20,0.6)] hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>`;

for (const file of files) {
  if (exclude.includes(file) || !file.endsWith('.tsx')) continue;
  
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add ArrowLeft to lucide-react import
  if (content.includes('lucide-react') && !content.includes('ArrowLeft')) {
    content = content.replace(/import\s+\{([^}]+)\}\s+from\s+'lucide-react';/, (match, p1) => {
      return `import { ArrowLeft, ${p1.trim()} } from 'lucide-react';`;
    });
  } else if (!content.includes('lucide-react')) {
    content = `import { ArrowLeft } from 'lucide-react';\n` + content;
  }
  
  // Find the hero section. It usually has <section className="relative min-h-[70vh]...
  // Or <section className="relative min-h-[60vh]...
  // We can look for the first <section className="relative
  
  const sectionRegex = /(<section[^>]*className="relative[^>]*>)/;
  if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, `$1${buttonHtml}`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find hero section in ${file}`);
  }
}
