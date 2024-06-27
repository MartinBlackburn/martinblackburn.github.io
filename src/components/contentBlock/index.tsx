// libraries
import React from "react";

//constants
import { ImagePosition } from "../../constants/imagePosition";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title: string;
    imagePath: string;
    imagePosition: ImagePosition;
    imageBorder?: boolean;
    children: JSX.Element;
}

const ContentBlock = (props: IComponentProps) => {
    let classes = "contentBlock";

    if (props.imagePosition === ImagePosition.RIGHT) {
        classes += " contentBlock--imageRight";
    }

    if (props.imagePosition === ImagePosition.LEFT) {
        classes += " contentBlock--imageLeft";
    }

    if (props.imagePosition === ImagePosition.FULL) {
        classes += " contentBlock--imageFull";
    }

    return (
        <div className={classes}>
            <h2 className="contentBlock__title">{props.title}</h2>
            <div className={`contentBlock__image ${props.imageBorder ? "contentBlock__image--border" : ""}`}>
                <img className="enlarge" src={`${props.imagePath}`} alt={`${props.title}`} />
            </div>
            <div className="contentBlock__content">{props.children}</div>
        </div>
    );
};

export default React.memo(ContentBlock);
