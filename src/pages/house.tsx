import React from "react";

// components
import Banner from "../components/banner";
import Timeline from "../components/timeline";

const HousePage = () => {
    return (
        <React.Fragment>
            <Banner
                introText="// home sweet home"
                titleText="Our house buying journey"
                backgroundImage={`${process.env.PUBLIC_URL}/images/house/front.jpg`}
                darken={true}
            />

            <Timeline />
        </React.Fragment>
    );
};

export default React.memo(HousePage);
