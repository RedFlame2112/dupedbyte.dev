// Ensure Pagefind assets are not excluded by _routes.json (Cloudflare Pages uses this for routing).
// This script runs after build to remove any _pagefind exclusions so the index, filters, and wasm are served.

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

  const before = data.exclude.length;
  data.exclude = data.exclude.filter((entry) => !entry.startsWith('/_pagefind/'));
  const after = data.exclude.length;

  if (before !== after) {
    writeFileSync(routesPath, JSON.stringify(data, null, 2));
    console.log(`[fix-routes] Removed ${before - after} _pagefind exclusions`);
  } else {
    console.log('[fix-routes] No _pagefind exclusions found');
  }
} catch (error) {
  console.error('[fix-routes] Failed to adjust _routes.json', error);
  process.exit(1);
}
