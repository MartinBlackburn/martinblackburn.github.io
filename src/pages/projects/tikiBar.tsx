//libraries
import React from "react";

// constants
import { ImagePosition } from "../../constants/imagePosition";

// components
import ContentBlock from "../../components/contentBlock";

const TikiBarPage = () => {
    return (
        <section className="repeatingContent">
            <h1>Tiki bar build:</h1>

            <div className="repeatingContent__list">
                <ContentBlock
                    title="Before"
                    imagePath="/images/projects/tikibar/before.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            We've had this unused messy area at the back of the garage for a while. As we have a party
                            coming up, it's a perfect excuse to build a bar.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="The frame"
                    imagePath="/images/projects/tikibar/frame.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>Knocking together a quick frame.</p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Roof close up"
                    imagePath="/images/projects/tikibar/roof.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            Close up of the roof, I got lucky here, as the angle needed was the exact size my mitre saw
                            can cut. I'll definitely be checking that in the future.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Adding the table top"
                    imagePath="/images/projects/tikibar/top.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            Good old OSB board, left over from another project worked well here. Sanded and stained to
                            help protect it. It's not perfect, but it's a bar, not a dining table and as its a cheap
                            top, it can easily be replaced.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Lights and recipes"
                    imagePath="/images/projects/tikibar/recipes 2.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            Some inspiration for recipes, and lights so you can see what you're pouring. Or you can
                            close your eyes if you don't like to know.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Finished"
                    imagePath="/images/projects/tikibar/finished.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            All done! Not bad for a few days work. Hopefully it''l go down well at the party. If not,
                            I'm sure my wife will talk me into converting it to a potting station for her plants.
                        </p>
                    </React.Fragment>
                </ContentBlock>
            </div>
        </section>
    );
};

export default React.memo(TikiBarPage);
