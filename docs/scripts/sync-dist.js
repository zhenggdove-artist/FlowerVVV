import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const run = async () => {
  console.log('sync-dist: copying build artifacts...');

  if (!fs.existsSync(distDir)) {
    console.error('dist folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  console.log(`sync-dist: dist found at ${distDir}`);
  const targetAssets = path.join(rootDir, 'assets');
  await fs.promises.rm(targetAssets, { recursive: true, force: true });

  // Remove unused frame dump to avoid re-publishing huge png sequences
  const distFiles = await fs.promises.readdir(distDir);
  let removedFrames = 0;
  for (const file of distFiles) {
    if (/^frame_\d+\.png$/i.test(file)) {
      await fs.promises.rm(path.join(distDir, file), { force: true });
      removedFrames++;
    }
  }
  if (removedFrames > 0) {
    console.log(`sync-dist: cleaned ${removedFrames} frame_*.png files from dist.`);
  }

  const distEntries = await fs.promises.readdir(distDir);
  console.log(`sync-dist: copying ${distEntries.length} items...`);

  for (const entry of distEntries) {
    const from = path.join(distDir, entry);
    const to = path.join(rootDir, entry);
    await fs.promises.cp(from, to, { recursive: true, force: true });
  }

  console.log('Copied dist build to docs/ for GitHub Pages.');
};

run().catch((err) => {
  console.error('Failed to sync dist to docs/:', err);
  process.exit(1);
});
