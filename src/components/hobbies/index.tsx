import React from "react";

// constants
import { distance, goodDeeds } from "../../constants/goodgym";

// components
import Hobby from "../contentBlock";

// styles
import "./styles.scss";

const Hobbies = () => {
    return (
        <section className="hobbies">
            <h1>Things I do for fun:</h1>

            <div className="hobbies__list">
                <Hobby title="Running" imagePath="/images/hobbies/running.png" imageRight={true}>
                    <React.Fragment>
                        <p>
                            I am a member of the <a href="https://www.goodgym.org">Good Gym</a>. Who are a group of
                            runners who get together to help out in the community. Projects can range from tidying up
                            public spaces, to running (literally) errands for people unable to do so themselves.
                        </p>
                        <p>
                            While being with Good Gym I've currently run about {distance} and done {goodDeeds} good
                            deeds.
                        </p>
                    </React.Fragment>
                </Hobby>

                <Hobby title="Climbing" imagePath="/images/hobbies/climbing.png" imageRight={false}>
                    <React.Fragment>
                        <p>
                            I'm all for finding ways to keep fit which don't feel like being repetitive and boring.
                            Bouldering does this very well. I currently climb at about a v3 level, maybe v4 on a good
                            day.
                        </p>
                        <p>
                            Bouldering is a great sport and you'll be surprised how quickly you can build strength and
                            technique to start doing some of those harder climbs that you previously thought were out of
                            reach (pun intended).
                        </p>
                    </React.Fragment>
                </Hobby>

                <Hobby title="Gaming" imagePath="/images/hobbies/gaming.png" imageRight={true}>
                    <React.Fragment>
                        <p>
                            Competition, puzzles, and the ability to transport yourself to an entirely new world and/or
                            place in time. What's not to love about a little escape from reality, it's even better when
                            you're with a few friends, and maybe even a drink or two.
                        </p>
                        <p>
                            Currently, we are playing through <a href="https://borderlands.com/">Borderlands 3</a>, god
                            bless that little <a href="https://en.wikipedia.org/wiki/Claptrap">Claptrap</a>.
                        </p>
                    </React.Fragment>
                </Hobby>

                <Hobby title="Cooking" imagePath="/images/hobbies/cooking.png" imageRight={false}>
                    <React.Fragment>
                        <p>
                            During lockdown I found myself with a lot more spare time, so I started cooking more. I
                            found lots of new recipes, which are not only healthier, but also tastier than just getting
                            takeaway. Here are a few of my newfound favourites:
                        </p>
                        <p>
                            <a href="https://12tomatoes.com/rustic-beef-stew/">Rustic beef stew</a>,{" "}
                            <a href="https://www.thekitchn.com/recipe-gnocchi-skillet-with-chicken-sausage-amp-tomatoes-206429">
                                gnocchi with chicken and tomatoes
                            </a>
                            ,{" "}
                            <a href="https://www.delish.com/cooking/recipe-ideas/a19636089/creamy-tuscan-chicken-recipe/">
                                creamy Tuscan chicken
                            </a>
                            .
                        </p>
                    </React.Fragment>
                </Hobby>
            </div>
        </section>
    );
};

export default React.memo(Hobbies);
