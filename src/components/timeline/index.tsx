// libraries
import React from "react";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title: string;
    dark?: boolean;
    children: JSX.Element | JSX.Element[];
}

const Timeline = (props: IComponentProps) => {
    let classes = "timeline";

    if (props.dark) {
        classes += " timeline--dark";
    }

    return (
        <div className={classes}>
            <h1 className="timeline__title">{props.title}</h1>

            <div className="timeline__content">{props.children}</div>
        </div>
    );
};

export default React.memo(Timeline);
