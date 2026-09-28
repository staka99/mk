import { readdirSync, writeFileSync, existsSync } from 'node:fs';

const candidates = ['public/assets', 'src/assets'];
const base = candidates.find(p => existsSync(`${p}/galerija`));

if (!base) {
  console.error('Ne nalazim folder galerija ni u public/assets ni u src/assets');
  process.exit(1);
}

const files = readdirSync(`${base}/galerija`)
  .filter(f => /\.(webp|jpe?g|png|gif|avif)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

writeFileSync(
  `${base}/galerija.json`,
  JSON.stringify(files.map(f => `assets/galerija/${f}`), null, 2)
);

console.log(`Galerija: ${files.length} slika upisano u ${base}/galerija.json`);