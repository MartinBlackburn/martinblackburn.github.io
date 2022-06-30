// libraries
import React from "react";

// components
import Timeline from "../";
import TimelineItem from "../timelineItem";

const House2Timeline = () => {
    return (
        <Timeline dark={true} title="House 2">
            <TimelineItem dark={true} title="Offer accepted" date="2022/03/15">
                <p>
                    We got pretty lucky and a house came up not too long after we lost the last one. £40,000 over asking
                    this time, eeek.
                </p>
                <p>
                    They already have an house offer accept, a new build, but we do have to wait until august for that
                    to be completed.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Mortgage down valued" date="2022/05/09">
                <p>The mortgage was rejected, they didn't believe the house was worth our offer.</p>
                <p>
                    Our mortgage broker said this has happened a lot recently with this particular mortgage provider and
                    we should try another.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Mortgage down valued again" date="2022/05/19">
                <p>The mortgage was rejected with another lender. Uh oh.</p>
                <p>We now have two options, make up the difference ourselves, or negotiate the price.</p>
                <p>
                    The seller has refused to reduce the price, so we agreed to make up the difference so long as the
                    survey came back ok.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Survey results" date="2022/06/13">
                <p>
                    Not good news, the survey listed several major issues, roof replacement, conservatory replacement,
                    penetrating damp on the first floor, rising damp on the ground floor, a crack in the external wall,
                    plus a few other smaller issues.
                </p>
                <p>
                    So we have sent the survey to the seller and have said that we are reducing our offer based on the
                    work needed.
                </p>
                <p>After several quotes, the work looks like it could be anywhere from £20,000 to £60,000 to do.</p>
            </TimelineItem>

            <TimelineItem dark={true} title="Price reduction" date="2022/06/29">
                <p>
                    With a lot of back and forth, we ended up with a £25,500 price reduction. This also reduces our
                    stamp duty bill by £1,275. So a total of £26,775 saved that we can use towards repairs. Hopefully
                    enough to cover most of the work needed.
                </p>
                <p>
                    It does mean we are still paying £15,000 over the value of the house, but as it's a house for life,
                    we feel that it's worth it.
                </p>
                <p>
                    We may not be able to do all the repairs/decorating we wanted in one go due to the cost. However,
                    the discount will allow us to do the major ones, such as the roof replacement and fix the damp.
                </p>
            </TimelineItem>
        </Timeline>
    );
};

export default React.memo(House2Timeline);
