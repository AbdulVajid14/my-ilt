// prerender.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { render } = await import("./dist/server/entry-server.js");
const metaMap = (await import("./src/meta.js")).default;

const API_BASE = process.env.VITE_BASE_URL;

const template = fs.readFileSync(
  path.resolve(__dirname, "dist/client/index.html"),
  "utf-8"
);

// ── slugify helpers (must match server.js exactly) ────────────────────────────
const slugifyCourse   = (name) => name.toLowerCase().replace(/\s+/g, "-");
const slugifyBlog     = (text) => text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");
const slugifyWorkshop = (title) => title.toLowerCase().replace(/\s+/g, "-");
const slugifyEvent    = (name, type) => `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${type}`;

// ── fetch dynamic routes from API ─────────────────────────────────────────────
async function getDynamicRoutes() {
  const routes = [];

  try {
    // Courses
    const coursesRes = await fetch(`${API_BASE}/courses`);
    const coursesJson = await coursesRes.json();
    if (coursesJson.success) {
      for (const c of coursesJson.data) {
        routes.push({
          url: `/courses/${slugifyCourse(c.name)}`,
          meta: {
            title: c.metaTitle || c.name,
            description: c.metaDescription || c.description || "",
            keywords: c.metaKeywords || "",
          },
        });
      }
    }
  } catch (e) {
    console.warn("⚠️  Could not fetch courses:", e.message);
  }

  try {
    // Blogs
    const blogsRes = await fetch(`${API_BASE}/News`);
    const blogsJson = await blogsRes.json();
    if (blogsJson.success) {
      for (const b of blogsJson.data) {
        routes.push({
          url: `/blog/${slugifyBlog(b.tittle)}`,
          meta: {
            title: b.metaTitle || b.tittle,
            description: b.metaDescription || "",
            keywords: b.metaKeywords || "",
          },
        });
      }
    }
  } catch (e) {
    console.warn("⚠️  Could not fetch blogs:", e.message);
  }

  try {
    // Events
    const eventsRes = await fetch(`${API_BASE}/Gallery?status=1`);
    const eventsJson = await eventsRes.json();
    const items = eventsJson.data || [];
    for (const item of items) {
      routes.push({
        url: `/events/${slugifyEvent(item.name, item.type)}`,
        meta: {
          title: item.metaTitle || item.name,
          description: item.metaDescription || item.name || "",
          keywords: item.metaKeywords || "",
        },
      });
    }
  } catch (e) {
    console.warn("⚠️  Could not fetch events:", e.message);
  }

  try {
    // Workshops
    const workshopsRes = await fetch(`${API_BASE}/Event`);
    const workshopsJson = await workshopsRes.json();
    if (workshopsJson.success) {
      const active = workshopsJson.data.filter((e) => e.status === 1);
      for (const w of active) {
        routes.push({
          url: `/workshop/${slugifyWorkshop(w.tittle)}`,
          meta: {
            title: w.metaTitle || w.tittle,
            description: w.metaDescription || w.description?.slice(0, 150) || "",
            keywords: w.metaKeywords || w.tittle || "",
          },
        });
      }
    }
  } catch (e) {
    console.warn("⚠️  Could not fetch workshops:", e.message);
  }

  return routes;
}

// ── write one HTML file ───────────────────────────────────────────────────────
function writeRoute(url, meta) {
  const metaTags = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
  `;

  let appHtml = "";
  try {
    appHtml = render(url);
  } catch (e) {
    console.warn(`  SSR render failed for ${url}:`, e.message);
  }

  const html = template
    .replace("<!--meta-inject-->", metaTags)
    .replace("<!--app-html-->", appHtml);

  const filePath =
    url === "/"
      ? path.resolve(__dirname, "dist/client/index.html")
      : path.resolve(__dirname, `dist/client${url}/index.html`);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
  console.log(`✅ ${url}`);
}

// ── main ──────────────────────────────────────────────────────────────────────
console.log("\n🔧 Pre-rendering static routes...");
for (const [url, meta] of Object.entries(metaMap)) {
  writeRoute(url, meta);
}

console.log("\n🌐 Fetching dynamic routes from API...");
const dynamicRoutes = await getDynamicRoutes();
console.log(`   Found ${dynamicRoutes.length} dynamic routes\n`);
for (const { url, meta } of dynamicRoutes) {
  writeRoute(url, meta);
}

console.log("\n✨ Pre-render complete!");