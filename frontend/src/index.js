import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

// Prerendered routes (see scripts/prerender.js) ship real markup inside #root
// so crawlers and first paint see real content immediately. We deliberately
// don't hydrateRoot() over it: this app was never built for SSR/hydration
// (Radix UI's client-only id/state timing produces hydration mismatches
// across separate page loads), so a plain client render is far more robust
// -- React just replaces the prerendered markup with its own render, same
// as this app already behaved before prerendering existed.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
