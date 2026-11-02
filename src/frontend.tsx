/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <Sidebar />
    <Content />
    <Footer />
  </StrictMode>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
type HotData = { root?: Root };
((import.meta.hot.data as HotData).root ??= createRoot(elem)).render(app);
