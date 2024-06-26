//libraries
import React from "react";

// components
import Banner from "../components/banner";
import Nav from "../components/nav";
import Typewriter from "../components/typewriter";

// constants
import { NavItem, NavItems } from "../constants/navItems";

const BasePage = () => {
    const [selectedNav, setSelectedNav] = React.useState<NavItem>(NavItems[0]);

    const PageComponent = React.lazy(() => import(`${selectedNav.componentPath}`));

    return (
        <React.Fragment>
            <Banner
                introText="// hello world"
                titleText="I'm Martin Blackburn"
                backgroundImage={`${process.env.PUBLIC_URL}/images/background.jpg`}
                profileImage={`${process.env.PUBLIC_URL}/images/profile2.jpg`}
                children={<Typewriter />}
            />

            <Nav onClick={setSelectedNav} />

            <React.Suspense>
                <PageComponent />
            </React.Suspense>
        </React.Fragment>
    );
};

export default React.memo(BasePage);