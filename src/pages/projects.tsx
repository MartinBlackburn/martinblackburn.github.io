//libraries
import React from "react";

// components
import About from "../components/about";
import Brands from "../components/brands";
import Hobbies from "../components/hobbies";

const HomePage = () => {
    return (
        <React.Fragment>
            <About />
            <Brands />
            <Hobbies />
        </React.Fragment>
    );
};

export default HomePage;
