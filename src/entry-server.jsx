// src/entry-server.jsx
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export function render(url) {
  try {
    const html = renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
    return html;
  } catch (e) {
    console.warn("SSR render error:", e.message);
    return "";
  }
}