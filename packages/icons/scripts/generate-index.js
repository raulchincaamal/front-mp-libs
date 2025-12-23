import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function toPascalCase(str) {
  return str
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
}

function getFolderSuffix(folderName) {
  const parts = folderName.split("-")
  return parts.length > 1
    ? parts[parts.length - 1].toLowerCase()
    : folderName.toLowerCase()
}

function generateIndexFile(dirPath) {
  const folderName = path.basename(dirPath)
  const suffix = getFolderSuffix(folderName)
  const indexPath = path.join(dirPath, "index.ts")

  const files = fs.readdirSync(dirPath)
  const svgFiles = files.filter(file => path.extname(file) === ".svg").sort()

  if (svgFiles.length === 0) {
    console.log(`No SVG files found in ${folderName}`)
    return
  }

  const exports = svgFiles.map(file => {
    const baseName = path.basename(file, ".svg")
    const componentName = toPascalCase(baseName) + toPascalCase(suffix)
    return `export { default as ${componentName} } from "./${file}"`
  })

  const content = exports.join("\n") + "\n"

  fs.writeFileSync(indexPath, content, "utf8")
  console.log(`Generated ${indexPath} with ${svgFiles.length} exports`)
}

function processLibDirectory() {
  const libPath = path.join(__dirname, "..", "lib")

  if (!fs.existsSync(libPath)) {
    console.error("lib directory not found")
    return
  }

  const items = fs.readdirSync(libPath)

  items.forEach(item => {
    const itemPath = path.join(libPath, item)
    const stat = fs.statSync(itemPath)

    if (stat.isDirectory()) {
      generateIndexFile(itemPath)
    }
  })
}

processLibDirectory()
console.log("Index files generation completed!")
