//libraries
import React from "react";

// components
import Banner from "../components/banner";
import Nav from "../components/nav";
import About from "../components/about";
import Brands from "../components/brands";
import Hobbies from "../components/hobbies";
import Typewriter from "../components/typewriter";

// constants
import { NavItem, NavItemType, NavItems } from "../constants/navItems";

const HomePage = () => {
    const iFrameRef = React.useRef<HTMLIFrameElement>(null);
    const [selectedNav, setSelectedNav] = React.useState<NavItem>(NavItems[0]);

    React.useEffect(() => {
        window.addEventListener(
            "message",
            (event) => {
                if (event.data.type === "iframeHeight") {
                    if (iFrameRef.current) {
                        iFrameRef.current.height = event.data.payload + 1 + "px";
                    }
                }
            },
            false
        );
    }, []);

    return (
        <React.Fragment>
            <Banner
                introText="// hello world"
                titleText="I'm Martin Blackburn"
                backgroundImage={`${process.env.PUBLIC_URL}/images/background.jpg`}
                profileImage={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                children={<Typewriter />}
            />

            <Nav onClick={setSelectedNav} />

            {selectedNav.type === NavItemType.iframe && (
                <iframe ref={iFrameRef} scrolling="no" id="iFrame" src={selectedNav.source} />
            )}

            {selectedNav.name === "Home" && (
                <React.Fragment>
                    <About />
                    <Brands />
                    <Hobbies />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default React.memo(HomePage);
