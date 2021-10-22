import React from "react";

// components
import Hobby from "./hobby";
import GoodGymText from "./goodGym";
import ClimbingText from "./climbing";
// import ShootingText from "./shooting";
import GamingText from "./gaming";
import CookingText from "./cooking";

// styles
import "./styles.scss";

const Hobbies = () => {
    return (
        <section className="hobbies">
            <h1>Things I do for fun:</h1>

            <div className="hobbies__list">
                <Hobby title="Running" image="running.png" text={<GoodGymText />} />
                <Hobby title="Climbing" image="climbing.png" text={<ClimbingText />} />
                {/* <Hobby title="Shooting" image="shooting.png" text={<ShootingText />} /> */}
                <Hobby title="Gaming" image="gaming.png" text={<GamingText />} />
                <Hobby title="Cooking" image="cooking.png" text={<CookingText />} />
            </div>
        </section>
    );
};

export default React.memo(Hobbies);
