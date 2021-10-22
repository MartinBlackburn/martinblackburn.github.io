import React from "react";

// components
import Hobby from "./hobby";
import GoodGymText from "./goodGym";
import ClimbingText from "./climbing";

// styles
import "./styles.scss";

const Hobbies = () => {
    return (
        <section className="hobbies">
            <h1>Things I do for fun</h1>

            <Hobby title="Running" image="running.png" text={<GoodGymText />} />
            <Hobby title="Climbing" image="climbing.png" text={<ClimbingText />} />
        </section>
    );
};

export default React.memo(Hobbies);
