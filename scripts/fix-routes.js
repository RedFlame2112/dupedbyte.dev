// Ensure Pagefind assets are served statically on Cloudflare Pages.
// The Cloudflare adapter emits _routes.json with "include: /*" and a list of static exclusions.
// Pagefind needs to stay in the exclude list so it bypasses the worker and is served as static files.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const routesPath = resolve('dist', '_routes.json');

if (!existsSync(routesPath)) {
  console.log('[fix-routes] No _routes.json found, skipping');
  process.exit(0);
}

try {
  const data = JSON.parse(readFileSync(routesPath, 'utf8'));
  if (!Array.isArray(data.exclude)) {
    console.log('[fix-routes] No exclude array found, nothing to change');
    process.exit(0);
  }

  const needed = [
    '/_pagefind/pagefind-entry.json',
    '/_pagefind/pagefind-highlight.js',
    '/_pagefind/pagefind-modular-ui.css',
    '/_pagefind/pagefind-modular-ui.js',
    '/_pagefind/pagefind-ui.css',
    '/_pagefind/pagefind-ui.js',
    '/_pagefind/pagefind.js',
    '/_pagefind/wasm.en.pagefind',
    '/_pagefind/wasm.unknown.pagefind'
  ];

  // Also ensure index/filter/fragment catch-alls are excluded from the worker
  const prefixes = [
    '/_pagefind/filter/',
    '/_pagefind/index/',
    '/_pagefind/fragment/'
  ];

  const excludeSet = new Set(data.exclude);
  let added = 0;

  needed.forEach((item) => {
    if (!excludeSet.has(item)) {
      excludeSet.add(item);
      added += 1;
    }
  });

  prefixes.forEach((prefix) => {
    // If there is no explicit prefix entry, add one.
    const hasPrefix = [...excludeSet].some((entry) => entry.startsWith(prefix));
    if (!hasPrefix) {
      excludeSet.add(`${prefix}*`);
      added += 1;
    }
  });

  data.exclude = [...excludeSet];

  writeFileSync(routesPath, JSON.stringify(data, null, 2));
  console.log(`[fix-routes] Ensured _pagefind assets are excluded from the worker (added ${added} entries if missing)`);
} catch (error) {
  console.error('[fix-routes] Failed to adjust _routes.json', error);
  process.exit(1);
}
