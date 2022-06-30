import React from "react";

// components
import Banner from "../components/banner";
import House1Timeline from "../components/timeline/house1";
import House2Timeline from "../components/timeline/house2";

const HousePage = () => {
    return (
        <React.Fragment>
            <Banner
                introText="// home sweet home"
                titleText="Our house buying journey"
                backgroundImage={`${process.env.PUBLIC_URL}/images/house/front.jpg`}
                darken={true}
            />

            <House1Timeline />

            <House2Timeline />
        </React.Fragment>
    );
};

export default React.memo(HousePage);
