// libraries
import React from "react";
import ReactDOM from "react-dom";

// styles
import "./index.scss";

// App
// import Nav from "./components/nav";
import Header from "./components/header";
// import Timeline from "./components/timeline";

ReactDOM.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,
    document.getElementById("root")
);
