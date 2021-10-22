// libraries
import React from "react";

// constants
import { distance, goodDeeds } from "../../../constants/goodgym";

const GoodGym = () => {
    return (
        <React.Fragment>
            <p>
                I am a member of the <a href="https://www.goodgym.org">Good Gym</a>. Who are a group of runners who get
                together to help out in the community. Projects can range from tidying up public spaces, to running
                (literally) errands for people unable to do so themselves.
            </p>
            <p>
                While being with Good Gym I've currently run about {distance} and done {goodDeeds} good deeds.
            </p>
        </React.Fragment>
    );
};

export default React.memo(GoodGym);
