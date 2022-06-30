import React from "react";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    backgroundImage: string;
    profileImage?: string;
    introText: string;
    titleText: string;
    children?: JSX.Element;
}

const Banner = (props: IComponentProps) => {
    return (
        <header className="banner" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            {props.profileImage && <img src={props.profileImage} alt="profile" />}

            <div className="banner__intro">{props.introText}</div>
            <h1 className="banner__name">{props.titleText}</h1>

            {props.children}
        </header>
    );
};

export default React.memo(Banner);
