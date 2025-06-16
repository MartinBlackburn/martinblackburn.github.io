//libraries
import React from "react";

// constants
import { NavItems } from "../../constants/navItems";

// styles
import "./styles.scss";

interface IProps {
    onClick: (navItem: string) => void;
}

const Nav = (props: IProps) => {
    const [visible, setVisible] = React.useState(false);

    let classes = "nav";

    if (visible) {
        classes += " nav--visible";
    }

    const handleOnClick = (navItem: string) => {
        setVisible(false);
        props.onClick(navItem);
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
                    {NavItems.HOME}
                </button>

                <div className="nav__title">About</div>

                <ul className="nav__links">
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.EMPLOYMENT)}>
                            {NavItems.EMPLOYMENT}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.EDUCATION)}>
                            {NavItems.EDUCATION}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.HOBBIES)}>
                            {NavItems.HOBBIES}
                        </button>
                    </li>
                </ul>

                <div className="nav__title">Projects</div>

                <ul className="nav__links">
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.CREATUREDASH)}>
                            {NavItems.CREATUREDASH}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.SHUFFLEBOARD)}>
                            {NavItems.SHUFFLEBOARD}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.TIKIBAR)}>
                            {NavItems.TIKIBAR}
                        </button>
                    </li>
                    <li>
                        <button className="nav__button" onClick={() => handleOnClick(NavItems.OFFICE)}>
                            {NavItems.OFFICE}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default React.memo(Nav);
