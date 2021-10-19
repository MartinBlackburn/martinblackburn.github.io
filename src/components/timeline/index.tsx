import React from "react";

// components
import TimelineItem from "../timelineItem";

// styles
import "./styles.scss";

const Timeline = () => {
    return (
        <div className="timeline">
            <TimelineItem title="some short title" text="some text" date={new Date("1986-02-11")} />
            <TimelineItem title="some fancy title" text="some text" date={new Date("1986-02-11")} />
            <TimelineItem
                title="some super super super super ling title"
                text="Hello world, today I did something. I then did some more thing, before finally doing more things."
                date={new Date("1986-02-11")}
            />
        </div>
    );
};

export default React.memo(Timeline);
