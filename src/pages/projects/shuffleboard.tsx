//libraries
import React from "react";

// components
import ContentBlock from "../../components/contentBlock";

const ShuffleBoardPage = () => {
    return (
        <section className="repeatingContent">
            <h1>How I built a shuffle board table:</h1>

            <div className="repeatingContent__list">
                <ContentBlock title="The frame" imagePath="/images/projects/shuffleboard/frame.jpg" imageRight={true}>
                    <React.Fragment>
                        <p>
                            The vertical part of the legs are wooden fence posts (70mm x 70mm x 700mm). The horizontal
                            parts are 45mm x 95mm x 650mm. These are held together using pocket holes and glue.
                        </p>
                        <p>
                            The two legs are then connected together using brackets and 45mm x 95mm x 2400mm timber
                            between them.
                        </p>
                        <p>
                            Each vertical part of hte leg also has a level foot underneath, so make level the playing
                            surface easier.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock title="The box" imagePath="/images/projects/shuffleboard/box 2.jpg" imageRight={false}>
                    <React.Fragment>
                        <p>
                            The bottom of the box is two OSB boards (1000mm x 1900mm x 18mm) laid next to each other,
                            this would make taking it apart for transport easier.
                        </p>
                        <p>
                            The rest of the box is made from 140mm x 18mm board, cut to size then glued and screwed from
                            below.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Prime and tape"
                    imagePath="/images/projects/shuffleboard/primed.jpg"
                    imageRight={true}
                >
                    <React.Fragment>
                        <p>
                            Quick coat of white wood primer to help the paint stick to the wood. Using a roller make
                            pretty quick work of splashing it all on.
                        </p>
                        <p>
                            I've also added a load of double sided tape, so some matting can be stuck to the inside of
                            frame.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock title="Paint" imagePath="/images/projects/shuffleboard/paint.jpg" imageRight={false}>
                    <React.Fragment>
                        <p>
                            Quick coat of paint to to make it look a little nicer. Again, using a roller was quicker
                            than a brush, and doesn't leave brush strokes.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Climate adjusters"
                    imagePath="/images/projects/shuffleboard/climate adjusters.jpg"
                    imageRight={true}
                >
                    <React.Fragment>
                        <p>
                            The playing surface is a 3000mm long worktop, sanded to a very smooth finish using 800 grit
                            sanding pad on an orbital sander.
                        </p>
                        <p>
                            Three metal bars, evenly spaced along the bottom of the playing surface, are used to make
                            the playing surface slightly concave. So you can get nice curved shots around other players
                            pucks.
                        </p>
                        <p>These bars are held in place using hanger bolts and nuts for easy adjusting.</p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock title="Matting" imagePath="/images/projects/shuffleboard/matting.jpg" imageRight={false}>
                    <React.Fragment>
                        <p>
                            Adding some exercise matting to help protect the frame from those people who like to try to
                            launch the pucks into space.
                        </p>
                        <p>
                            It's also a little easier than painting too, since it's stuck on with super strength double
                            sided tape.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock title="Numbering" imagePath="/images/projects/shuffleboard/numbers.jpg" imageRight={true}>
                    <React.Fragment>
                        <p>
                            Adding some sticky vinyl numbers to the scoring area. This was easier than trying to
                            paint/draw them on, as my handwriting is terrible.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Naming things is hard"
                    imagePath="/images/projects/shuffleboard/name 2.jpg"
                    imageRight={false}
                >
                    <React.Fragment>
                        <p>A few more vinyl stickers and it now has a name, curtsy of my wife.</p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Finished"
                    imagePath="/images/projects/shuffleboard/finished 2.jpg"
                    imageRight={true}
                >
                    <React.Fragment>
                        <p>
                            The final product, all set up and ready to play. It's a little rough around the edges, but
                            for less than £500, it's a pretty good shuffle board.
                        </p>
                    </React.Fragment>
                </ContentBlock>
            </div>
        </section>
    );
};

export default React.memo(ShuffleBoardPage);
