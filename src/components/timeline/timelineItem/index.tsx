// libraries
import React from "react";

// components
import DateComponent from "../../date";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title: string;
    startDate: string;
    endDate?: string;
    dark?: boolean;
    children?: React.ReactNode;
}

const TimelineItem = (props: IComponentProps) => {
    let classes = "timelineItem";

    if (props.dark) {
        classes += " timelineItem--dark";
    }

    let endDate = null;

    if (props.endDate === "present") {
        endDate = "present";
    }

    if (props.endDate && props.endDate !== "present") {
        endDate = <DateComponent date={new Date(props.endDate)} />;
    }

    return (
        <div className={classes}>
            <h2 className="timelineItem__title">{props.title}</h2>

            <div className="timelineItem__date">
                <DateComponent date={new Date(props.startDate)} /> {endDate ? " - " : ""} {endDate}
            </div>

            {props.children}
        </div>
    );
};

export default React.memo(TimelineItem);
