// libraries
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

// styles
import "./index.scss";

// pages
import HomePage from "./pages/home";
import HousePage from "./pages/house";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/house" element={<HousePage />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
