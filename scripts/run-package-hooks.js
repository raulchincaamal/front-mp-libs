#!/usr/bin/env node

const { execSync } = require('child_process');

// Obtener archivos modificados
const getChangedFiles = () => {
  try {
    const output = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
};

// Detectar paquetes afectados
const getAffectedPackages = (changedFiles) => {
  const packages = new Set();
  
  changedFiles.forEach(file => {
    if (file.startsWith('packages/')) {
      const packageName = file.split('/')[1];
      packages.add(packageName);
    }
  });
  
  return Array.from(packages);
};

// Ejecutar comandos por paquete
const runPackageCommands = (packageName) => {
  const packageMap = {
    'icons': '@mp-front/icons'
  };
  
  const scopeName = packageMap[packageName];
  if (!scopeName) {
    console.log(`⚠️  Paquete ${packageName} no configurado`);
    return;
  }
  
  console.log(`🔍 Ejecutando hooks para ${scopeName}...`);
  
  try {
    execSync(`npx lerna run lint --scope="${scopeName}" --stream`, { stdio: 'inherit' });
    
    try {
      execSync(`npx lerna run build --scope="${scopeName}" --stream`, { stdio: 'inherit' });
    } catch (buildError) {
      console.log(`ℹ️  No hay script build para ${scopeName}`);
    }
    
    console.log(`✅ Hooks completados para ${scopeName}`);
  } catch (error) {
    console.error(`❌ Error ejecutando hooks para ${scopeName}:`, error.message);
    process.exit(1);
  }
};

// Ejecutar
const main = () => {
  const changedFiles = getChangedFiles();
  const affectedPackages = getAffectedPackages(changedFiles);
  
  if (affectedPackages.length === 0) {
    console.log('No hay paquetes afectados');
    return;
  }
  
  console.log(`📦 Paquetes afectados: ${affectedPackages.join(', ')}`);
  affectedPackages.forEach(runPackageCommands);
};

main();