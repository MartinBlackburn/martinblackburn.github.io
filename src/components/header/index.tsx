import React from "react";

// components
import Typewriter from "../typewriter";

// styles
import "./styles.scss";

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)` }}>
            <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="profile" />
            <div className="header__intro">&#47;&#47; Hello world</div>
            <h1 className="header__name">I'm Martin Blackburn</h1>
            <Typewriter />
        </header>
    );
};

export default React.memo(Header);
