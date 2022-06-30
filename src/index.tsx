// libraries
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

// styles
import "./index.scss";

// pages
import HomePage from "./pages/home";
import HousePage from "./pages/house";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/house" element={<HousePage />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
