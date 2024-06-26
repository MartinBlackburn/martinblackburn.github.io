//libraries
import React from "react";

// constants
import { NavItems, NavItem } from "../../constants/navItems";

// styles
import "./styles.scss";

interface IProps {
    onClick: (navItem: NavItem) => void;
}

const Nav = (props: IProps) => {
    const [visible, setVisible] = React.useState(false);

    let classes = "nav";

    if (visible) {
        classes += " nav--visible";
    }

    const handleOnClick = (navItem: NavItem) => {
        setVisible(false);
        props.onClick(navItem);
        setTimeout(() => {
            console.log("scrolling", window.innerHeight);
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }, 200);
    };

    return (
        <nav className={classes}>
            <div className="nav__icon" onClick={() => setVisible(!visible)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
            </div>

            <div className="nav__content">
                <button className="nav__button" onClick={() => handleOnClick(NavItems.HOME)}>
                    {NavItems.HOME.name}
                </button>

                <div className="nav__title">About</div>

                <ul className="nav__links">
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.EMPLOYMENT)}>
                            {NavItems.EMPLOYMENT.name}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.EDUCATION)}>
                            {NavItems.EDUCATION.name}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.HOBBIES)}>
                            {NavItems.HOBBIES.name}
                        </button>
                    </li>
                </ul>

                <div className="nav__title">Projects</div>

                <ul className="nav__links">
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.SHUFFLEBOARD)}>
                            {NavItems.SHUFFLEBOARD.name}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.TIKIBAR)}>
                            {NavItems.TIKIBAR.name}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default React.memo(Nav);
