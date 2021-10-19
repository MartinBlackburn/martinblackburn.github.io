import React from "react";

// components
import DateComponent from "../date";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title: string;
    text: string;
    date: Date;
}

const TimelineItem = (props: IComponentProps) => {
    return (
        <div className="timelineItem">
            <div className="timelineItem__line"></div>
            <div className="timelineItem__icon"></div>
            <div className="timelineItem__content">
                <h2 className="timelineItem__title">{props.title}</h2>
                <DateComponent date={props.date} />
                <p className="timelineItem__text">{props.text}</p>
            </div>
        </div>
    );
};

export default React.memo(TimelineItem);
