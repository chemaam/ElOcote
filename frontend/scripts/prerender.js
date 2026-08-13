#!/usr/bin/env node
/**
 * Build-time prerendering.
 *
 * GitHub Pages cannot do server-side rewrites, so this CRA/BrowserRouter app
 * previously relied on a 404.html -> query-string -> history.replaceState hack
 * for client-side routes. That hack returns a genuine HTTP 404 status on first
 * request, which search engines and (especially) non-JS-executing AI crawlers
 * treat as "this page doesn't exist" -- see the SEO audit findings M1/M2/M3/M4/M11/M14.
 *
 * This script serves the CRA `build/` output locally, visits each app route in
 * headless Chrome, waits for the route to actually mount content, and writes the
 * fully-rendered DOM back to build/<route>/index.html. GitHub Pages then serves
 * that as a real static file with a genuine 200 status -- no JS execution needed
 * to see content. The client bundle still hydrates on top of it for interactivity.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const ROUTES = ['/', '/productos', '/servicios', '/nosotros', '/cotizar', '/contacto'];
const PORT = 45621;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startServer(pristineIndexHtml) {
  return http
    .createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      const isAssetRequest = path.extname(urlPath) !== '';
      const filePath = path.join(BUILD_DIR, urlPath);

      if (isAssetRequest && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        res.setHeader('Content-Type', MIME[path.extname(filePath)] || 'application/octet-stream');
        fs.createReadStream(filePath).pipe(res);
        return;
      }

      // SPA fallback: any route-shaped path gets the pristine, un-prerendered
      // index.html so every route is captured from the same clean baseline
      // (avoids feeding route N's prerendered output back in as route N+1's shell).
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(pristineIndexHtml);
    })
    .listen(PORT);
}

async function main() {
  const indexPath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('build/index.html not found -- run `craco build` before prerendering.');
    process.exit(1);
  }
  const pristineIndexHtml = fs.readFileSync(indexPath, 'utf8');

  const server = startServer(pristineIndexHtml);
  // --no-sandbox is required in CI containers (e.g. GitHub Actions'
  // ubuntu-latest runner), which don't support Chrome's user namespace sandbox.
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return !!root && root.children.length > 0;
        },
        { timeout: 15000 },
      );
      // title/meta description/canonical are rendered exclusively via
      // react-helmet-async in each page component (nothing static in
      // public/index.html duplicates them -- see index.html and Home.jsx),
      // so a plain outerHTML capture is safe here.
      const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);
      await page.close();

      const outPath = route === '/' ? indexPath : path.join(BUILD_DIR, route.slice(1), 'index.html');
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);
      console.log(
        `Prerendered ${route} -> ${path.relative(BUILD_DIR, outPath)} (${(html.length / 1024).toFixed(1)} KB)`,
      );
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
