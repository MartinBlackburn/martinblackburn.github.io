import React from "react";

// components
import Typewriter from "../typewriter";

// styles
import "./styles.scss";

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)` }}>
            <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="profile" />
            <div className="header__intro">&#47;&#47; Hello world</div>
            <div className="header__name">I'm Martin Blackburn</div>
            <Typewriter />
        </div>
    );
};

export default React.memo(Header);
