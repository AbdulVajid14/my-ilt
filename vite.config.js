import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  ssr: {
    noExternal: [],
  },
  resolve: {
    conditions: ["module", "browser", "default"],
  },
  build: {
    // ✅ Add this — SSR output goes to dist/server, client to dist/client
    outDir: isSsrBuild ? "dist/server" : "dist/client",
    cssCodeSplit: true,
    minify: "esbuild",
    cssMinify: true,
    chunkSizeWarningLimit: 600,
    target: "esnext",
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              react: ["react", "react-dom"],
              router: ["react-router-dom"],
              vendor: ["axios"],
            },
          },
        },
  },
}));
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//     ssr: {
//     noExternal: ["react-router-dom"],
//   },
//   build: {
//     cssCodeSplit: true,
//     minify: "terser",
//     cssMinify: true,
//     chunkSizeWarningLimit: 600,
//     // --- IMPORTANT: Proper chunk splitting ---
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ["react", "react-dom"],
//           router: ["react-router-dom"],
//           vendor: ["axios"],
//         },
//       },
//     },

//     // --- Reduce bundle size ---
//     minify: "esbuild",
//     target: "esnext",
//   },

//   // --- Your CSS preload optimization (kept intact) ---
//   experimental: {
//     renderBuiltUrl(filename, { type }) {
//       if (type === "css") {
//         return {
//           html: (href) =>
//             `<link rel="preload" href="${href}" as="style" onload="this.rel='stylesheet'">
//              <noscript><link rel="stylesheet" href="${href}"></noscript>`,
//         };
//       }
//     },
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig(({ isSsrBuild }) => ({
//   plugins: [react(), tailwindcss()],
//   ssr: {
//     noExternal: [],
//   },
//   resolve: {
//     conditions: ["module", "browser", "default"],
//   },
//   build: {
//     cssCodeSplit: true,
//     minify: "esbuild",
//     cssMinify: true,
//     chunkSizeWarningLimit: 600,
//     target: "esnext",
//     // Only apply manualChunks for client build, NOT SSR build
//     rollupOptions: isSsrBuild
//       ? {}
//       : {
//           output: {
//             manualChunks: {
//               react: ["react", "react-dom"],
//               router: ["react-router-dom"],
//               vendor: ["axios"],
//             },
//           },
//         },
//   },
// }));