import React from "react";

// components
import Banner from "../components/banner";
import About from "../components/about";
import Brands from "../components/brands";
import Hobbies from "../components/hobbies";
import Typewriter from "../components/typewriter";

const HomePage = () => {
    return (
        <React.Fragment>
            <Banner
                introText="// hello world"
                titleText="I'm Martin Blackburn"
                backgroundImage={`${process.env.PUBLIC_URL}/images/background.jpg`}
                profileImage={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                children={<Typewriter />}
            />

            <About />
            <Brands />
            <Hobbies />
        </React.Fragment>
    );
};

export default React.memo(HomePage);
