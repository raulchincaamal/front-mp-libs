import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function updateSvgFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8")

    // Replace SVG opening tag attributes
    content = content.replace(
      /<svg[^>]*>/,
      '<svg height="1em" width="1em" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">'
    )

    // Remove fill attributes from path elements
    content = content.replace(
      /<path([^>]*)\s+fill="[^"]*"([^>]*)/g,
      "<path$1$2"
    )

    // Remove fill attributes from rect elements in clipPath
    content = content.replace(
      /<rect([^>]*)\s+fill="[^"]*"([^>]*)/g,
      "<rect$1$2"
    )

    fs.writeFileSync(filePath, content, "utf8")
    console.log(`Updated: ${filePath}`)
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message)
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      processDirectory(filePath)
    } else if (path.extname(file) === ".svg") {
      updateSvgFile(filePath)
    }
  })
}

// Process both directories
const libPath = path.join(__dirname, "..", "lib")
processDirectory(libPath)

console.log("SVG files updated successfully!")
