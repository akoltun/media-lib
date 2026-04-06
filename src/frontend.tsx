import { Home } from "./domains/home/home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";

const elem = document.getElementById("root");
if (!elem) {
  throw new Error("Root element #root not found in DOM");
}
const app = (
  <StrictMode>
    <Home />
  </StrictMode>
);

// oxlint-disable no-unnecessary-condition
if (import.meta.hot) {
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion typescript/no-unsafe-member-access
  const root = ((import.meta.hot.data.root as Root | undefined) ??= createRoot(elem));
  root.render(app);
} else {
  createRoot(elem).render(app);
}
