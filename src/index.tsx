// libraries
import React from "react";
import { createRoot } from "react-dom/client";

// styles
import "./index.scss";

// pages
import HomePage from "./pages/home";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
