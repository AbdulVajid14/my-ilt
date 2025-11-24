// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    cssCodeSplit: true,

    // --- IMPORTANT: Proper chunk splitting ---
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          vendor: ["axios"],
        },
      },
    },

    // --- Reduce bundle size ---
    minify: "esbuild",
    target: "esnext",
  },

  // --- Your CSS preload optimization (kept intact) ---
  experimental: {
    renderBuiltUrl(filename, { type }) {
      if (type === "css") {
        return {
          html: (href) =>
            `<link rel="preload" href="${href}" as="style" onload="this.rel='stylesheet'">
             <noscript><link rel="stylesheet" href="${href}"></noscript>`,
        };
      }
    },
  },
});
