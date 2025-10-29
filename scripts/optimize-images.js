const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '../public/assets/images');
const outputDir = path.join(__dirname, '../public/assets/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(publicImagesDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
});

// Process each image
async function optimizeImages() {
  console.log(`Found ${imageFiles.length} images to optimize`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(publicImagesDir, file);
    const outputPath = path.join(outputDir, file);
    
    // Skip directories
    if (fs.statSync(inputPath).isDirectory()) continue;
    
    try {
      // Optimize the image
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true }) // Resize to max width 1200px
        .webp({ quality: 80 }) // Convert to WebP with 80% quality
        .toFile(outputPath.replace(/\.[^.]+$/, '.webp'));
      
      console.log(`Optimized: ${file}`);
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages();