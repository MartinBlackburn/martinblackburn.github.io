//libraries
import React from "react";

// constants
import { ImagePosition } from "../../constants/imagePosition";

// components
import ContentBlock from "../../components/contentBlock";

// hooks
import { useScrollTo } from "../../utils/scrollToHook";

const CreatureDashPage = () => {
    const componentRef = useScrollTo();

    return (
        <section className="repeatingContent" ref={componentRef}>
            <h1>Creature dash:</h1>

            <div className="repeatingContent__list">
                <ContentBlock
                    title="The idea"
                    imagePath="/images/projects/creatureDash/idea.webp"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            <a href="https://jonny.blackburn.dev">My brother</a> and I had this idea to build a virtual
                            snail racing game, which can be used to help raise funds for good causes.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="The game"
                    imagePath="/images/projects/creatureDash/game.jpeg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            <a href="https://jonny.blackburn.dev">Jonny</a> worked on the game. Creature customisable
                            snails, which raced against each other. After the race the three winning snails are shown on
                            a podium.
                        </p>

                        <p>The game was written using PixiJS, an open source webGL render.</p>

                        <p>
                            There a lots more features we want to add to make the game more interesting, such as
                            obstacles on the tracks, power ups, cheering on the runners.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="The site"
                    imagePath="/images/projects/creatureDash/site.jpeg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            I worked on the site, which allows users to create an account, create events, customising
                            the runners and allowing sponsor images to be uploaded.
                        </p>

                        <p>The site was written using:</p>
                        <ul>
                            <li>Next JS, React, for the frontend.</li>
                            <li>Prisma, for the database.</li>
                            <li>Stripe for payment processing.</li>
                            <li>Digital Ocean and Cloudflare for hosting.</li>
                            <li>Github actions for building Docker images.</li>
                        </ul>

                        <p>
                            <a href="https://creaturedash.com">View the site here</a>
                        </p>
                    </React.Fragment>
                </ContentBlock>
            </div>
        </section>
    );
};

export default React.memo(CreatureDashPage);
