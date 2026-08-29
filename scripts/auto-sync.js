import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔄 Monitor de Sincronização Automática com o GitHub iniciado...');
console.log(' Qualquer alteração nos arquivos será enviada automaticamente para https://github.com/AguiaLTDA/posemia-landing-page.git');

let isSyncing = false;
let syncTimeout = null;

function syncToGithub() {
  if (isSyncing) return;
  isSyncing = true;

  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (!status.trim()) {
      isSyncing = false;
      return;
    }

    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    console.log(`\n📦 Detectada alteração [${timestamp}]. Sincronizando com o GitHub...`);

    execSync('git add .');
    execSync(`git commit -m "auto: sincronizar alterações [${timestamp}]"`);
    execSync('git push origin main');

    console.log('✅ Alterações enviadas com sucesso para o GitHub!');
  } catch (err) {
    console.error('⚠️ Aviso ao sincronizar com o GitHub:', err.message);
  } finally {
    isSyncing = false;
  }
}

// Watch src folder for file changes
const srcPath = path.resolve(process.cwd(), 'src');
if (fs.existsSync(srcPath)) {
  fs.watch(srcPath, { recursive: true }, (eventType, filename) => {
    if (filename && !filename.includes('node_modules') && !filename.includes('.git')) {
      if (syncTimeout) clearTimeout(syncTimeout);
      syncTimeout = setTimeout(syncToGithub, 2000); // 2 second debounce
    }
  });
}
