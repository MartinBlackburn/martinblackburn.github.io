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

            <ul className="nav__links">
                {NavItems.map((navItem) => (
                    <li key={navItem.name}>
                        {!navItem.subNav && (
                            <button className="nav__button" onClick={() => handleOnClick(navItem)}>
                                {navItem.name}
                            </button>
                        )}

                        {navItem.subNav && (
                            <React.Fragment>
                                <div className="nav__title">{navItem.name}</div>

                                <ul>
                                    {navItem.subNav.map((subNavItem) => (
                                        <li key={subNavItem.name}>
                                            <button className="nav__button" onClick={() => props.onClick(subNavItem)}>
                                                {subNavItem.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default React.memo(Nav);
