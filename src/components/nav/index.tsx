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
    let navItemElements: React.ReactElement[] = [];

    NavItems.forEach((navItem) => {
        navItemElements.push(
            <li key={navItem.name}>
                <a onClick={() => props.onClick(navItem)}>{navItem.name}</a>
            </li>
        );
    });

    return (
        <div className="nav">
            <ul>{navItemElements}</ul>
        </div>
    );
};

export default React.memo(Nav);
