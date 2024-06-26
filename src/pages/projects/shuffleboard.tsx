//libraries
import React from "react";

// components
import About from "../../components/about";
import Hobbies from "../../components/hobbies";

const HomePage = () => {
    return (
        <React.Fragment>
            <About />
            <Hobbies />
        </React.Fragment>
    );
};

export default HomePage;
