//libraries
import React from "react";

// constants
import { ImagePosition } from "../../constants/imagePosition";

// components
import ContentBlock from "../../components/contentBlock";

// hooks
import { useScrollTo } from "../../utils/scrollToHook";

const OfficePage = () => {
    const componentRef = useScrollTo();

    return (
        <section className="repeatingContent" ref={componentRef}>
            <h1>Office renovation:</h1>

            <div className="repeatingContent__list">
                <ContentBlock
                    title="Before"
                    imagePath="/images/projects/office renovation/before.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            As part of our plan when moving into our new house, we wanted to have a dedicated office
                            space. This room was perfect, too small for a bedroom and too big for anything else, but,
                            like most of the house, needed a lot of work.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Remove the old flooring"
                    imagePath="/images/projects/office renovation/old floor out.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            The first job was to take up the flooring. It was a very nice wood floor and we were hoping
                            to keep it.
                        </p>
                        <p>
                            However the previous own had other plans. They had glued the boards together, so when we
                            took them up, they all broke at the edges.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Bad plaster work"
                    imagePath="/images/projects/office renovation/removing bad plaster.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            We had the rendering redone on the outside of the house, as we knew that there was some
                            water coming in.
                        </p>
                        <p>Once we confirmed that had fixed the problem, we had to chip away the damaged plaster.</p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Replacing the subfloor"
                    imagePath="/images/projects/office renovation/replacing the floor.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            Directly below this room is the kitchen and the boiler. As we'll be converting all our
                            central heating to electric, I wanted to check what pipes ran where and remove any that
                            weren't needed. A total of 16 meters of pipe was removed from this tiny room.
                        </p>
                        <p>
                            The old floorboards were a little rotten, had old pipe holes in from previous central
                            heating replacements and a little un-level in places, so while there I thought we may as
                            well just replace the lot.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="New subfloor"
                    imagePath="/images/projects/office renovation/new subfloor.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            As the room now had no water pipes running under it, I could use moisture resistant
                            chipboard, rather than wooden boards. Which made putting it all down a lot quicker.
                        </p>
                        <p>
                            We also decided to write our names, date and draw little pictures that one day someone will
                            come across.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Plastered and painted"
                    imagePath="/images/projects/office renovation/painted.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            Now we had a nice stable and level floor, we plastered and painted the room. Since it's an
                            office and I'll be on video calls a lot, I went for some boring neutral colours.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Floor going down"
                    imagePath="/images/projects/office renovation/floor going in.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>We added the thickest foam underlay we could find, for two reasons.</p>
                        <p>Firstly, extra insulation will help keep the room warm.</p>
                        <p>
                            Secondly, it will help reduce the noise from the kitchen/dining room below, which are
                            usually the loudest rooms in the house for us.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Floor completed"
                    imagePath="/images/projects/office renovation/floor complete.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            Floor down! I would have liked carpet, but as the office chairs have wheels, it made more
                            sense for a wooden floor.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Desk"
                    imagePath="/images/projects/office renovation/desk top.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>Now for the important part, a oversized desk.</p>
                        <p>
                            There was a perfect space between the cupboard and the wall, big enough for a good sized
                            desk.
                        </p>
                        <p>Following all the cool kids, I put a kitchen worktop on top of some Ikea draws.</p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Desk back"
                    imagePath="/images/projects/office renovation/desk back.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            As I planned to use one set of draws to hide the computer tower in, I wanted some extra
                            space to store things.
                        </p>
                        <p>
                            Adding some pegboards to the back would give me lots of storage options, as well as a place
                            to hide all the cables.
                        </p>
                    </React.Fragment>
                </ContentBlock>

                <ContentBlock
                    title="Desk complete"
                    imagePath="/images/projects/office renovation/desk complete.jpg"
                    imagePosition={ImagePosition.FULL}
                    imageBorder={true}
                >
                    <React.Fragment>
                        <p>
                            Not a bad looking desk, if I do say so myself. The pegboards are great for hanging things on
                            and also adds to the aesthetic. The draws are perfect for hiding the computer tower and most
                            of the cables are tucked away out of sight.
                        </p>
                        <p>
                            I did had a USB extension that comes out of the right hand side of the pegboards, which I
                            can then swap different types of USB cables to as needed.
                        </p>
                    </React.Fragment>
                </ContentBlock>
            </div>
        </section>
    );
};

export default React.memo(OfficePage);
