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

  // Cloudflare rejects overlapping rules, so we collapse to a single wildcard.
  const excludeSet = new Set(
    data.exclude.filter((entry) => !entry.startsWith('/_pagefind/'))
  );
  excludeSet.add('/_pagefind/*');

  data.exclude = [...excludeSet];

  writeFileSync(routesPath, JSON.stringify(data, null, 2));
  console.log('[fix-routes] Ensured _pagefind assets bypass the worker via /_pagefind/* rule');
} catch (error) {
  console.error('[fix-routes] Failed to adjust _routes.json', error);
  process.exit(1);
}
