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
                    We got pretty lucky and a house came up not too long after we lost the last one. After a little
                    bidding war we won! Although it was £40,000 over asking this time, eeek.
                </p>
                <p>
                    They already have an house offer accepted, a new build, but we do have to wait until august for that
                    to be completed.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Mortgage down valued" date="2022/05/09">
                <p>The mortgage was rejected, they didn't think the house was worth our offer.</p>
                <p>
                    Our mortgage broker said this has happened a lot recently with this particular mortgage provider and
                    we should try another.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Mortgage down valued again" date="2022/05/19">
                <p>The mortgage was rejected with another lender. Uh oh.</p>
                <p>We now have two options, make up the difference ourselves (£40,000), or negotiate the price.</p>
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
                    the discount will allow us to do the major ones, such as the roof replacement and fix the damp
                    problems.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Initial report" date="2022/07/04">
                <p>
                    We have the initial report from our solicitor. It's outstanding a few enquires from the sellers
                    solicitor, but we should get these soon.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Still outstanding enquires" date="2022/07/21">
                <p>
                    Still waiting on enquiries from the solicitors. Not even sure what they think they are missing at
                    this point, there is very little communication from either solicitor.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Ready to sign?" date="2022/08/01">
                <p>Our solicitor just said we'll have the contracts ready to sign buy the end of the week.</p>
            </TimelineItem>

            <TimelineItem dark={true} title="Nup not ready" date="2022/08/11">
                <p>
                    Despite what we were told last week, our solicitor clearly never looked at the file and we are still
                    missing some things from the sellers solicitor.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Talk to each other" date="2022/08/12">
                <p>The estate agent doesn't think there was anything out standing, but our solicitor does.</p>
                <p>
                    So we have copied them both in on an email asking what they are missing and who needs to provide it.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Different name" date="2022/08/17">
                <p>
                    Turns out the seller was married after buying the house. So the title deeds with land registry don't
                    reflect her current name. I thought this would have been a basic thing they should have checked at
                    the start, but hey!
                </p>
                <p>So the seller will need to update land registry before we can carry on with the purchase.</p>
            </TimelineItem>

            <TimelineItem dark={true} title="Autograph time?" date="2022/09/06">
                <p>We have finally got our contracts and can now sign and send them off to the solicitors.</p>
                <p>
                    Actually no, it's full of mistakes and so need to have them amended. Obvious mistakes too, like: the
                    wrong purchase price, wrong stamp duty amount, wrong address for my contact details to name a few.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Now it's autograph time" date="2022/09/07">
                <p>
                    We have finally got our <em>correct</em> contracts and can now sign and send them off to the
                    solicitors.
                </p>
                <p>
                    No completion date yet, but we finally feel like we might actually get to move in some time this
                    year.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Can we move yet?" date="2022/10/15">
                <p>
                    There has been lots of back and forth over the last month, we don't seem to be any closer to
                    exchanging either.
                </p>
            </TimelineItem>

            <TimelineItem dark={true} title="Exchange time" date="2022/11/17">
                <p>We have finally exchanged and have a completion date.</p>
                <p>We'll be getting our keys on next week. Wooooooo!!!</p>
                <p>
                    Now the fun starts of getting repairs and decorating, as well as organising all the boring, but
                    essential things, like insurance.
                </p>
            </TimelineItem>
        </Timeline>
    );
};

export default React.memo(House2Timeline);
