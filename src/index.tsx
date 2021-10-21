// libraries
import React from "react";
import ReactDOM from "react-dom";

// styles
import "./index.scss";

// App
// import Nav from "./components/nav";
import Header from "./components/header";
import About from "./components/about";
import Brands from "./components/brands";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <About />
        <Brands />
    </React.StrictMode>,
    document.getElementById("root")
);
