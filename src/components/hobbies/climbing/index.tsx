// libraries
import React from "react";

const ClimbingText = () => {
    return (
        <React.Fragment>
            <p>
                I'm all for finding ways to keep fit which don't feel like being repetitive and boring. Bouldering does
                this very well. I currently climb at about a v3 level, maybe v4 on a good day.
            </p>
            <p>
                Bouldering is a great sport and you don't need to rely on pure strength to complete a climb, with a good
                technique you can do just as well. You'll be surprised how quickly you can build strength and technique
                to starting doing some of those harder climbs that you previously thought were out of reach (pun
                intended).
            </p>
        </React.Fragment>
    );
};

export default React.memo(ClimbingText);
