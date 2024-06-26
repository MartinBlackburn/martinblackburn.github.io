import React from "react";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title: string;
    imagePath: string;
    imageRight: boolean;
    children: JSX.Element;
}

const ContentBlock = (props: IComponentProps) => {
    let classes = "contentBlock";

    if (props.imageRight) {
        classes += " contentBlock--imageRight";
    }

    return (
        <div className={classes}>
            <h2 className="contentBlock__title">{props.title}</h2>
            <div className="contentBlock__image">
                <img src={`${props.imagePath}`} alt={`${props.title}`} />
            </div>
            <div className="contentBlock__content">{props.children}</div>
        </div>
    );
};

export default React.memo(ContentBlock);
