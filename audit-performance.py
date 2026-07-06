#!/usr/bin/env python3
"""Performance & Quality Audit for Next.js Portfolio"""
import json
import time
from playwright.sync_api import sync_playwright

URL = "http://localhost:3000"
OUTPUT = "audit-report.json"

def run_audit():
    results = {
        "url": URL,
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "metrics": {},
        "accessibility": {},
        "seo": {},
        "quality": {},
    }

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(2000)

        # 1. Performance
        metrics = page.evaluate("""() => {
            const nav = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            return {
                loadTime: nav.loadEventEnd - nav.fetchStart,
                fcp: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
                resourceCount: performance.getEntriesByType('resource').length,
                totalSize: performance.getEntriesByType('resource').reduce((sum, r) => sum + (r.transferSize || 0), 0)
            };
        }""")
        results["metrics"] = metrics

        # 2. Accessibility
        a11y = page.evaluate("""() => {
            const issues = [];
            document.querySelectorAll('img:not([alt])').forEach(img => {
                issues.push('Missing alt: ' + img.src);
            });
            document.querySelectorAll('a:not([aria-label])').forEach(a => {
                if (!a.textContent.trim() && !a.querySelector('img[alt]')) {
                    issues.push('Empty link: ' + a.href);
                }
            });
            document.querySelectorAll('button:not([aria-label])').forEach(btn => {
                if (!btn.textContent.trim()) issues.push('Empty button');
            });
            return {issues};
        }""")
        results["accessibility"] = a11y

        # 3. SEO
        seo = page.evaluate("""() => {
            const meta = {};
            document.querySelectorAll('meta').forEach(m => {
                const name = m.getAttribute('name') || m.getAttribute('property');
                if (name) meta[name] = m.getAttribute('content');
            });
            return {
                meta,
                h1: document.querySelector('h1')?.textContent?.slice(0, 100),
                title: document.title,
                ogImage: meta['og:image'],
                twitterImage: meta['twitter:image']
            };
        }""")
        results["seo"] = seo

        # 4. Quality
        quality = page.evaluate("""() => {
            const brokenImages = [];
            document.querySelectorAll('img').forEach(img => {
                if (!img.complete || img.naturalWidth === 0) brokenImages.push(img.src);
            });
            const ids = [];
            const duplicates = [];
            document.querySelectorAll('[id]').forEach(el => {
                if (ids.includes(el.id)) duplicates.push(el.id);
                else ids.push(el.id);
            });
            return {
                brokenImages,
                duplicates,
                viewport: document.querySelector('meta[name="viewport"]')?.content
            };
        }""")
        results["quality"] = quality

        # 5. Responsive
        responsive = {}
        for w, label in [(375, "mobile"), (768, "tablet"), (1440, "desktop")]:
            page.set_viewport_size({"width": w, "height": 800})
            page.wait_for_timeout(300)
            overflow = page.evaluate("() => document.body.scrollWidth > window.innerWidth")
            responsive[f"overflow_{label}"] = overflow
        results["quality"]["responsive"] = responsive

        browser.close()

    with open(OUTPUT, 'w') as f:
        json.dump(results, f, indent=2)

    # Summary
    m = results["metrics"]
    a = results["accessibility"]
    q = results["quality"]
    print("=" * 50)
    print("  AUDIT RESULTS")
    print("=" * 50)
    print(f"  Load Time:        {m.get('loadTime', 0):.0f}ms")
    print(f"  FCP:              {m.get('fcp', 0):.0f}ms")
    print(f"  Resource Count:   {m.get('resourceCount', 0)}")
    print(f"  Total Size:       {m.get('totalSize', 0) / 1024:.0f}KB")
    print(f"  A11y Issues:      {len(a.get('issues', []))}")
    for issue in a.get("issues", [])[:5]:
        print(f"    - {issue}")
    print(f"  Broken Images:    {len(q.get('brokenImages', []))}")
    print(f"  Duplicate IDs:    {len(q.get('duplicates', []))}")
    print(f"  Responsive OK:    {all(not v for k, v in q.get('responsive', {}).items())}")
    print("=" * 50)
    print(f"  Full report: {OUTPUT}")

if __name__ == "__main__":
    run_audit()
