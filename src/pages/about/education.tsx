// libraries
import React from "react";

// components
import Timeline from "../../components/timeline";
import TimelineItem from "../../components/timeline/timelineItem";

const EducationPage = () => {
    return (
        <Timeline title="Education" dark={true}>
            <TimelineItem title="Masters degree - Games design and programming" startDate="2009/09/01" dark={true}>
                <p>
                    I created a interface for computers, using a glove with infrared lights, I was able to track hand
                    gestures and allow a user to pick things up and moving them around. I created a jigsaw like game as
                    a proof of concept, where a pinch action would pickup the pieces and allow you to move them into
                    place.
                </p>
                <p>
                    I also worked with other students to create two games designed for big screens in public places. A
                    whack-a-mole style game and a simon says game.
                </p>
                <p>
                    My role was to track people's movements into and out of specific spots, trigging commands the game
                    would then use.
                </p>
                <p>We worked with the BBC to get it displayed on the big screen in millennium square in Leeds.</p>
                <p>Some old videos, which haven't dated very well.</p>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=nxgZ2xvsCYA">Hand tracking</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=6KckTCNnJlg">Big screen trailer</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=VJ202jEfRFw">Big screen gameplay</a>
                    </li>
                </ul>
            </TimelineItem>

            <TimelineItem title="Bachelors Degree - Artificial Intelligence" startDate="2008/09/01" dark={true}>
                <p>
                    I wrote about how artificial intelligence could be used to detect dangerous items/substances with
                    security scanners. The scanner, using a type of microwaves, would work out the materials the items
                    were made of and a silhouette of it. This was then given to the AI, which would then highlight any
                    unwanted items by checking its shape and the materials it was likely made from.
                </p>
            </TimelineItem>
        </Timeline>
    );
};

export default React.memo(EducationPage);
