// libraries
import React from "react";

const GamingText = () => {
    return (
        <React.Fragment>
            <p>
                Competition, puzzles, and the ability to transport yourself to an entirely new world and/or place in
                time. What's not to love about a little escape from reality, it's even better when you're with a few
                friends, and maybe even a drink or two.
            </p>
            <p>
                Currently, we are playing through <a href="https://borderlands.com/">Borderlands 3</a>, god bless that
                little <a href="https://en.wikipedia.org/wiki/Claptrap">Claptrap</a>.
            </p>
        </React.Fragment>
    );
};

export default React.memo(GamingText);
