import * as fs from 'fs';
import * as path from 'path';

const filesToUpdate = [
  'src/pages/Showcase.tsx',
  'src/pages/ServiceSupport.tsx',
  'src/pages/About.tsx',
  'src/components/Layout.tsx'
];

const newLogoUrl = 'https://www.rpmachinery.com/images/rpm-logo-edits-centered-textbox_embedMask_Transparent_300dpi.png';

for (const file of filesToUpdate) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/src="\/rpm-logo-transparent\.png"/g, `src="${newLogoUrl}"`);
    content = content.replace(/src="rpm-logo-transparent\.png"/g, `src="${newLogoUrl}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
