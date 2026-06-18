import sharp from "sharp";
import { readdirSync, unlinkSync, existsSync } from "fs";
import { join, extname, basename } from "path";

const ASSETS = "src/assets";
const MAX_HERO = 1920;
const MAX_CONTENT = 1280;

// Hero/large background images — cap at 1920px
const HERO_PATTERNS = ["hero", "sol-", "about-hero", "manufacturing-hero", "insight-hero", "contact-hero", "cta-banner"];

const files = readdirSync(ASSETS).filter(f => /\.(png|jpg|jpeg|svg)$/i.test(f) && !f.endsWith(".svg"));

let saved = 0;
let count = 0;

for (const file of files) {
  const src = join(ASSETS, file);
  const ext = extname(file);
  const name = basename(file, ext);
  const dest = join(ASSETS, name + ".webp");

  const isHero = HERO_PATTERNS.some(p => file.toLowerCase().includes(p));
  const maxW = isHero ? MAX_HERO : MAX_CONTENT;

  try {
    const meta = await sharp(src).metadata();
    const originalSize = (await import("fs")).statSync(src).size;

    await sharp(src)
      .resize({ width: maxW, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dest);

    const newSize = (await import("fs")).statSync(dest).size;
    const saving = ((1 - newSize / originalSize) * 100).toFixed(1);
    saved += originalSize - newSize;
    count++;

    console.log(`✓ ${file} → ${name}.webp  (${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB, -${saving}%)`);

    // Remove original after successful conversion
    unlinkSync(src);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}

console.log(`\nDone: ${count} files, saved ${(saved / 1024 / 1024).toFixed(2)} MB total`);
