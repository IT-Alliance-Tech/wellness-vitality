const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('c:/workspace/wellness-vitality-v2/src');
let changedFiles = [];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace case-insensitive 'Clinical Benefits' and variants
  content = content.replace(/>\s*Clinical Benefits\s*</gi, '>\n  How It May Support You\n<');
  content = content.replace(/>\s*Clinical Benefit\s*</gi, '>\n  How It May Support You\n<');
  content = content.replace(/>\s*Benefits?\s*</gi, '>\n  How It May Support You\n<');
  
  // Specific eyebrow texts
  content = content.replace(/The Corporate Health Benefit/gi, 'How Corporate Health May Support You');
  content = content.replace(/Why Choose IV Therapy/gi, 'How IV Therapy May Support You');

  // Any remaining 'benefits' inside UI logic like text 
  content = content.replace(/>\s*Benefits?\s*</gi, '>\n  How It May Support You\n<');

  // The 'cure' replacements
  content = content.replace(/\bcure\b/gi, 'support');
  content = content.replace(/\bcures\b/gi, 'supports');
  
  // Replace attributes if they exist
  content = content.replace(/heading="Clinical Benefits"/g, 'heading="How It May Support You"');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles.push(file);
  }
});

console.log('Changed files:', changedFiles);
