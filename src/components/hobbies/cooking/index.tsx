// libraries
import React from "react";

const CookingText = () => {
    return (
        <React.Fragment>
            <p>
                During lockdown I found myself with a lot more spare time, so I started cooking more. I found lots of
                new recipes, which are not only healthier, but also tastier than just getting takeaway. Here are a few
                of my newfound favourites:
            </p>
            <ul>
                <li>
                    <a href="https://12tomatoes.com/rustic-beef-stew/">Rustic beef stew</a>
                </li>
                <li>
                    <a href="https://www.thekitchn.com/recipe-gnocchi-skillet-with-chicken-sausage-amp-tomatoes-206429">
                        gnocchi with chicken and tomatoes
                    </a>
                </li>
                <li>
                    <a href="https://www.delish.com/cooking/recipe-ideas/a19636089/creamy-tuscan-chicken-recipe/">
                        creamy Tuscan chicken
                    </a>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default React.memo(CookingText);
