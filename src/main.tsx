import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { init } from "@telegram-apps/sdk-react";

export let isTmaLaunched = false;
try {
  init();
  isTmaLaunched = true; 
} catch (e) {
  if (e instanceof Error) {
    console.warn("no TMA launched", e.message);
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
