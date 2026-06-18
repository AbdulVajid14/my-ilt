// src/hooks/useMetaTags.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import metaMap from "../meta";

const useMetaTags = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaMap[pathname];

    if (!meta) return; // No entry for this route — leave tags as-is

    // ── Title ──────────────────────────────────────────────────────────────
    document.title = meta.title;

    // ── Description ────────────────────────────────────────────────────────
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", meta.description);

    // ── Keywords ───────────────────────────────────────────────────────────
    let kwTag = document.querySelector('meta[name="keywords"]');
    if (!kwTag) {
      kwTag = document.createElement("meta");
      kwTag.setAttribute("name", "keywords");
      document.head.appendChild(kwTag);
    }
    kwTag.setAttribute("content", meta.keywords);

  }, [pathname]);
};

export default useMetaTags;