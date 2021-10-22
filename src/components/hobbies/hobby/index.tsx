import React from "react";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title: string;
    image: string;
    text: JSX.Element;
}

const Hobby = (props: IComponentProps) => {
    return (
        <div className="hobby">
            <h2 className="hobby__title">{props.title}</h2>
            <div className="hobby__image">
                <img src={`/images/hobbies/${props.image}`} alt={`illustration of someone ${props.title}`} />
            </div>
            <div className="hobby__content">{props.text}</div>
        </div>
    );
};

export default React.memo(Hobby);
