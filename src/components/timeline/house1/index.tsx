// libraries
import React from "react";

// components
import Timeline from "../";
import TimelineItem from "../timelineItem";

const House1Timeline = () => {
    return (
        <Timeline title="House 1">
            <TimelineItem title="Offer accepted" date="2021/05/11">
                <p>After many many house viewings, we finally got an offer accepted - £35,000 over asking price!</p>
                <p>
                    Now we just have to wait for them to find a house they want to move to, while we get our paperwork
                    in order, mortgage, surveys, etc.
                </p>
            </TimelineItem>

            <TimelineItem title="Mortgage approved" date="2021/06/03">
                <p>
                    A little back and forth with the mortgage provider with some proof of identity and other documents
                    and we finally have our mortgage approved.
                </p>
            </TimelineItem>

            <TimelineItem title="Seller has found a house" date="2021/06/15">
                <p>
                    The seller has found a house and had their offer accepted, even better news is that there is no
                    onward chain, so it will be a fairly simple process.
                </p>
            </TimelineItem>

            <TimelineItem title="Seller pulled out of onward purchase" date="2021/06/24">
                <p>
                    The seller has decide that their onward purchase wasn't right for them, and so have pulled out. This
                    means we are now waiting for them to find a new house.
                </p>
            </TimelineItem>

            <TimelineItem title="Seller has found another house" date="2021/08/17">
                <p>
                    The seller has found another house and had their offer accepted, also with no chain. Hopefully this
                    will be the end of our waiting.
                </p>
            </TimelineItem>

            <TimelineItem title="Seller pulled out of onward purchase again" date="2021/11/02">
                <p>
                    Back to waiting, as they decided to pull out of their onward purchase as they didn't like the people
                    who were servicing the property.
                </p>
            </TimelineItem>

            <TimelineItem title="Mortgage offer expired" date="2021/12/04">
                <p>
                    As it has been 6 months since our mortgage offer, it has now expired, so we have to re-apply.
                    Nothing complicated, and it was approved the same day based on our old application, but we've
                    decided to keep an eye out for other properties as this is taking a long time.
                </p>
            </TimelineItem>

            <TimelineItem title="Seller has found their 3rd house" date="2022/01/17">
                <p>
                    The seller has found another house and had their offer accepted, although this one does have a
                    chain.
                </p>
            </TimelineItem>

            <TimelineItem title="Too stressful for the seller" date="2022/02/03">
                <p>
                    The seller has decided the whole process is too stressful and have decided not to sell their house,
                    so we are back to viewings again.
                </p>
                <p>
                    So thats just over 8 months gone - thankfully we did start keeping an eye out for other properties.
                    Unfortunately, we didn't see anything we liked as much so didn't make offers. Hindsight is a brutal
                    thing.
                </p>
            </TimelineItem>
        </Timeline>
    );
};

export default React.memo(House1Timeline);
