const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(fullPath));
        } else { 
            if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walk('./src');
let modifiedCount = 0;

files.forEach(file => {
    // Skip Navbar and Footer as requested
    if (file.includes('Navbar.jsx') || file.includes('Footer.jsx')) return;
    
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // We want to find className="..."
    content = content.replace(/className="([^"]+)"/g, (match, classStr) => {
        // Only target containers that have max-w-7xl, max-w-6xl, or are functioning as main wrappers
        if (classStr.includes('max-w-7xl') || classStr.includes('max-w-6xl') || classStr.includes('max-w-screen-xl')) {
            let classes = classStr.split(/\s+/);
            
            // Remove max-w-7xl, max-w-6xl, mx-auto
            classes = classes.filter(c => !['max-w-7xl', 'max-w-6xl', 'max-w-screen-xl', 'mx-auto'].includes(c));
            
            // Remove old padding so we don't have duplicates/conflicts
            classes = classes.filter(c => !c.match(/^(sm:|md:|lg:|xl:)?px-\d+$/));
            
            // Add new classes
            classes.push('w-full', 'px-4', 'sm:px-6', 'lg:px-12', 'xl:px-16');
            
            return `className="${classes.join(' ')}"`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
        console.log(`Modified: ${file}`);
    }
});

console.log(`Total modified: ${modifiedCount}`);
