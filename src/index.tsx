// libraries
import React from "react";
import { createRoot } from "react-dom/client";

// styles
import "./index.scss";

// pages
import BasePage from "./pages/base";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <BasePage />
    </React.StrictMode>
);
