// Local static server for dist/.   npm run build && npm run serve
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = Number(process.env.PORT) || JSON.parse(fs.readFileSync(path.join(dist, "..", "package.json"), "utf8")).config.port;
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml", ".pdf": "application/pdf" };

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname); if (p.endsWith("/")) p += "index.html";
  let f = path.join(dist, path.normalize(p));
  if (!f.startsWith(dist)) { res.writeHead(403); return res.end(); }
  if (!fs.existsSync(f) && fs.existsSync(f + ".html")) f += ".html";
  fs.readFile(f, (err, buf) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }); return res.end(fs.existsSync(path.join(dist, "404.html")) ? fs.readFileSync(path.join(dist, "404.html")) : "not found"); }
    res.writeHead(200, { "Content-Type": types[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-cache" }); res.end(buf);
  });
}).listen(PORT, () => console.log(`→ http://localhost:${PORT}`));
