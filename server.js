import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = "production";
const API_BASE = process.env.VITE_BASE_URL;

const app = express();
app.use(compression());

let vite;

if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  app.use(vite.middlewares);
} else {
  app.use(
    express.static(path.resolve(__dirname, "dist/client"), { index: false })
  );
}

const metaMapModule = await import("./src/meta.js");
const metaMap = metaMapModule.default;

// ─── slugify helpers (match exactly what each page uses) ──────────────────────

// CourseDetails uses: c.name.toLowerCase().replace(/\s+/g, "-")
const slugifyCourse = (name) => name.toLowerCase().replace(/\s+/g, "-");

// BlogDetail uses: text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "")
const slugifyBlog = (text) =>
  text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, "");

// WorkshopDetails uses: event.tittle.toLowerCase().replace(/\s+/g, '-')
const slugifyWorkshop = (title) => title.toLowerCase().replace(/\s+/g, "-");

// EventsDetails uses: `${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${item.type}`
const slugifyEvent = (name, type) =>
  `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${type}`;

// ─── Dynamic meta fetcher ─────────────────────────────────────────────────────

async function getDynamicMeta(url) {

  // /courses/some-slug
  const courseMatch = url.match(/^\/courses\/([^/]+)$/);
  if (courseMatch) {
    const slug = courseMatch[1];
    try {
      const res = await fetch(`${API_BASE}/courses`);
      const json = await res.json();
      if (json.success) {
        const course = json.data.find((c) => slugifyCourse(c.name) === slug);
        if (course) {
          return {
            title: course.metaTitle || course.name,
            description: course.metaDescription || course.description || "",
            keywords: course.metaKeywords || "",
          };
        }
      }
    } catch (e) {
      console.warn("Course meta fetch failed:", e.message);
    }
    return null;
  }

  // /blog/some-slug
  const blogMatch = url.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    try {
      const res = await fetch(`${API_BASE}/News`);
      const json = await res.json();
      if (json.success) {
        const blog = json.data.find((b) => slugifyBlog(b.tittle) === slug);
        if (blog) {
          return {
            title: blog.metaTitle || blog.tittle,
            description: blog.metaDescription || "",
            keywords: blog.metaKeywords || "",
          };
        }
      }
    } catch (e) {
      console.warn("Blog meta fetch failed:", e.message);
    }
    return null;
  }

  // /events/some-slug
  const eventMatch = url.match(/^\/events\/([^/]+)$/);
  if (eventMatch) {
    const slug = eventMatch[1];
    try {
      const res = await fetch(`${API_BASE}/Gallery?status=1`);
      const json = await res.json();
      if (json.success || json.data) {
        const items = json.data || [];
        const event = items.find(
          (item) => slugifyEvent(item.name, item.type) === slug
        );
        if (event) {
          return {
            title: event.metaTitle || event.name,
            description: event.metaDescription || event.name || "",
            keywords: event.metaKeywords || "",
          };
        }
      }
    } catch (e) {
      console.warn("Event meta fetch failed:", e.message);
    }
    return null;
  }

  // /workshop/some-slug
  const workshopMatch = url.match(/^\/workshop\/([^/]+)$/);
  if (workshopMatch) {
    const slug = workshopMatch[1];
    try {
      const res = await fetch(`${API_BASE}/Event`);
      const json = await res.json();
      if (json.success) {
        const workshops = json.data.filter((e) => e.status === 1);
        const workshop = workshops.find(
          (e) => slugifyWorkshop(e.tittle) === slug
        );
        if (workshop) {
          return {
            title: workshop.metaTitle || workshop.tittle,
            description:
              workshop.metaDescription ||
              workshop.description?.slice(0, 150) ||
              "",
            keywords: workshop.metaKeywords || workshop.tittle || "",
          };
        }
      }
    } catch (e) {
      console.warn("Workshop meta fetch failed:", e.message);
    }
    return null;
  }

  return null; // not a dynamic route
}

// ─── Main route handler ───────────────────────────────────────────────────────

app.get("/{*path}", async (req, res) => {
  const url = req.originalUrl;

  // 1. Static meta map
  let meta = metaMap[url];

  // 2. Dynamic API meta
  if (!meta) {
    meta = await getDynamicMeta(url);
  }

  // 3. Fallback
  if (!meta) {
    meta = {
      title: "ILT Kerala | Digital Marketing Training Institute",
      description:
        "Internet Leads Training - Kerala's best digital marketing institute in Kochi.",
      keywords: "digital marketing, seo training, kochi",
    };
  }

  try {
    let template;
    let render;

    if (!isProduction) {
      template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = fs.readFileSync(
        path.resolve(__dirname, "dist/client/index.html"),
        "utf-8"
      );
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const metaTags = `
      <title>${meta.title}</title>
      <meta name="description" content="${meta.description}" />
      <meta name="keywords" content="${meta.keywords}" />
    `;

    // Try SSR render — if it fails, still serve meta tags
    let appHtml = "";
    try {
      appHtml = render(url);
    } catch (renderError) {
      console.warn("SSR render skipped:", renderError.message);
    }

    const html = template
      .replace("<!--meta-inject-->", metaTags)
      .replace("<!--app-html-->", appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    if (!isProduction) vite.ssrFixStacktrace(e);
    console.error(e);
    res.status(500).end(e.message);
  }
});

app.listen(5173, () => {
  console.log("SSR Server running at http://localhost:5173");
});