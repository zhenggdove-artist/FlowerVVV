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
  // IMPORTANT (GitHub Pages caching):
  // Do NOT delete the entire assets folder on each deploy. Users may have cached an older
  // docs/index.html that still references a previous hashed asset file; deleting it causes
  // a black screen until cache expires.
  // We overwrite/merge new build assets and keep older ones for backward compatibility.

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
