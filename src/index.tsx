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
import Hobbies from "./components/hobbies";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <About />
        <Brands />
        <Hobbies />
    </React.StrictMode>,
    document.getElementById("root")
);
