import React from "react";

// styles
import "./styles.scss";

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">My journey</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(Nav);
