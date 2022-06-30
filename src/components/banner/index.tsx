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
    darken?: boolean;
}

const Banner = (props: IComponentProps) => {
    let classes = "banner";

    if (props.darken) {
        classes += " banner--darken";
    }

    return (
        <header className={classes} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            {props.profileImage && <img className="banner__profile" src={props.profileImage} alt="profile" />}

            <div className="banner__text">
                <div className="banner__intro">{props.introText}</div>
                <h1 className="banner__name">{props.titleText}</h1>
            </div>

            {props.children}
        </header>
    );
};

export default React.memo(Banner);
