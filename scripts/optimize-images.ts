// This is a script that would be run separately to optimize images
// It's not part of the Next.js application but demonstrates the approach

import fs from "fs"
import path from "path"
import sharp from "sharp"

const PUBLIC_DIR = path.join(process.cwd(), "public")
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, "optimized")

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true })
}

// Get all image files from public directory
const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"]
const getImageFiles = (dir: string): string[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true })

  return files.flatMap((file) => {
    const filePath = path.join(dir, file.name)

    if (file.isDirectory()) {
      // Skip the optimized directory to avoid re-processing
      if (file.name === "optimized") return []
      return getImageFiles(filePath)
    } else {
      const ext = path.extname(file.name).toLowerCase()
      if (imageExtensions.includes(ext)) {
        return [filePath]
      }
      return []
    }
  })
}

const optimizeImage = async (filePath: string) => {
  const relativePath = path.relative(PUBLIC_DIR, filePath)
  const outputPath = path.join(OPTIMIZED_DIR, relativePath)

  // Create directory structure if it doesn't exist
  const outputDir = path.dirname(outputPath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  try {
    // Optimize image
    await sharp(filePath)
      .resize(1200) // Resize to max width of 1200px
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .toFile(outputPath.replace(/\.[^.]+$/, ".webp"))

    console.log(`Optimized: ${relativePath}`)
  } catch (error) {
    console.error(`Error optimizing ${relativePath}:`, error)
  }
}

const main = async () => {
  const imageFiles = getImageFiles(PUBLIC_DIR)
  console.log(`Found ${imageFiles.length} images to optimize`)

  for (const file of imageFiles) {
    await optimizeImage(file)
  }

  console.log("Image optimization complete!")
}

main().catch(console.error)

