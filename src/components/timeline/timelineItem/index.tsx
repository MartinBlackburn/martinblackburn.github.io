// libraries
import React from "react";

// components
import DateComponent from "../../date";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title: string;
    date: string;
    dark?: boolean;
    children?: React.ReactNode;
}

const TimelineItem = (props: IComponentProps) => {
    let classes = "timelineItem";

    if (props.dark) {
        classes += " timelineItem--dark";
    }

    return (
        <div className={classes}>
            <h2 className="timelineItemTitle">{props.title}</h2>
            <DateComponent date={new Date(props.date)} />

            {props.children}
        </div>
    );
};

export default React.memo(TimelineItem);
