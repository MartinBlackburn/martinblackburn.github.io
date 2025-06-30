//libraries
import React, { useEffect } from "react";

// components
import Banner from "../components/banner";
import Nav from "../components/nav";
import Typewriter from "../components/typewriter";
import ImageModal from "../components/imageModal";

import Home from "./home";

import Employment from "./about/employment";
import Education from "./about/education";
import Hobbies from "./about/hobbies";

import CreatureDash from "./projects/creatureDash";
import Shuffleboard from "./projects/shuffleboard";
import TikiBar from "./projects/tikiBar";
import Office from "./projects/office";

// constants
import { NavItems } from "../constants/navItems";

const BasePage = () => {
    const [selectedNav, setSelectedNav] = React.useState<string>(NavItems.HOME);

    let PageComponent: React.ReactElement;

    switch (selectedNav) {
        case NavItems.HOME:
            PageComponent = <Home />;
            break;
        case NavItems.EMPLOYMENT:
            PageComponent = <Employment />;
            break;
        case NavItems.EDUCATION:
            PageComponent = <Education />;
            break;
        case NavItems.HOBBIES:
            PageComponent = <Hobbies />;
            break;
        case NavItems.CREATUREDASH:
            PageComponent = <CreatureDash />;
            break;
        case NavItems.SHUFFLEBOARD:
            PageComponent = <Shuffleboard />;
            break;
        case NavItems.TIKIBAR:
            PageComponent = <TikiBar />;
            break;
        case NavItems.OFFICE:
            PageComponent = <Office />;
            break;
        default:
            PageComponent = <Home />;
    }

    useEffect(() => {
        // Set the initial selected nav item based on the query string
        const urlParams = new URLSearchParams(window.location.search);
        const initialNav = urlParams.get("nav") || NavItems.HOME;

        const navItem = Object.values(NavItems).find((item) => initialNav.includes(item));

        if (navItem) {
            setSelectedNav(navItem);
        }
    }, []);

    return (
        <React.Fragment>
            <Banner
                introText="// hello world"
                titleText="I'm Martin Blackburn"
                backgroundImage={`/images/background.jpg`}
                profileImage={`/images/profile2.jpg`}
                children={<Typewriter />}
            />

            <ImageModal />

            <Nav onClick={setSelectedNav} />

            {PageComponent}
        </React.Fragment>
    );
};

export default React.memo(BasePage);
