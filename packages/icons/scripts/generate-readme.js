import fs from "fs"
import path from "path"

function generateReadme() {
  const libPath = "./lib"
  const readmePath = "./README.md"

  let readmeContent = `# @mp-front/icons

Librería de iconos SVG basados en Font Awesome.

## Instalación

\`\`\`bash
npm install @mp-front/icons
\`\`\`

## Uso

\`\`\`tsx
import { AlarmClock, ArrowRight } from '@mp-front/icons';

function App() {
  return (
    <div>
      <AlarmClock />
      <ArrowRight />
    </div>
  );
}
\`\`\`

## Iconos Disponibles

`

  const folders = fs
    .readdirSync(libPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  folders.forEach(folder => {
    const folderPath = path.join(libPath, folder)
    const svgFiles = fs
      .readdirSync(folderPath)
      .filter(file => file.endsWith(".svg"))
      .sort()

    const folderTitle = folder
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    readmeContent += `### ${folderTitle}

| Icono | Nombre del icono |
|-------|------------------|
`

    svgFiles.forEach(file => {
      const iconName = file.replace(".svg", "")
      const iconPath = `./lib/${folder}/${file}`
      readmeContent += `| <img src="${iconPath}" width="24" height="24"> | ${iconName} |\n`
    })

    readmeContent += "\n"
  })

  fs.writeFileSync(readmePath, readmeContent)
  console.log("README.md generado exitosamente")
}

generateReadme()
