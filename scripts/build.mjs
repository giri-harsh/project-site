// Static build → dist/.  Pulls the shared design system from its single source, harshgiri.site/ds/v1/
// (override with DS_URL, e.g. DS_URL=http://localhost:5170/ds/v1 when running harshgiri-site locally),
// and vendors GSAP from node_modules. Pages are hand-authored HTML in src/.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const DS_URL = (process.env.DS_URL || "https://harshgiri.site/ds/v1").replace(/\/$/, "");
const write = (to, buf) => { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.writeFileSync(to, buf); };

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(path.join(root, "src"), dist, { recursive: true });

const gsap = path.join(root, "node_modules", "gsap", "dist");
if (!fs.existsSync(gsap)) throw new Error("missing gsap — run npm install");
for (const f of ["gsap.min.js", "ScrollTrigger.min.js", "SplitText.min.js"]) write(path.join(dist, "vendor", f), fs.readFileSync(path.join(gsap, f)));

const get = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(`design system: ${r.status} ${u}`); return Buffer.from(await r.arrayBuffer()); };
const manifest = JSON.parse(await get(`${DS_URL}/manifest.json`));
await Promise.all(manifest.files.map(async (f) => write(path.join(dist, "ds", "v1", f), await get(`${DS_URL}/${f}`))));
write(path.join(dist, "ds", "v1", "manifest.json"), JSON.stringify(manifest, null, 1));
console.log(`build: dist/ ready · design system ${manifest.name}@${manifest.version} (${manifest.files.length} files) from ${DS_URL}`);
