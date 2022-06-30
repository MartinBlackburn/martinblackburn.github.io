// libraries
import React from "react";

// components
import DateComponent from "../date";

// styles
import "./styles.scss";

// types
interface IComponentProps {}

const Timeline = (props: IComponentProps) => {
    return (
        <div className="timeline">
            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Offer accepted</h2>
                <DateComponent date={new Date("2021/05/11")} />

                <p>After many many house viewings, we finally got an offer accepted - £35,000 over asking price!</p>
                <p>
                    Now we just have to wait for them to find a house they want to move to, while we get our paperwork
                    in order, mortgage, surveys, etc.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Mortgage approved</h2>
                <DateComponent date={new Date("2021/06/03")} />

                <p>
                    A little back and forth with the mortgage provider with some proof of identity and other documents
                    and we finally have our mortgage approved.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Seller has found a house</h2>
                <DateComponent date={new Date("2021/06/15")} />

                <p>
                    The seller has found a house and had their offer accepted, even better news is that there is no
                    onward chain, so it will be a fairly simple process.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Seller pulled out of onward purchase</h2>
                <DateComponent date={new Date("2021/06/24")} />

                <p>
                    The seller has decide that their onward purchase wasn't right for them, and so have pulled out. This
                    means we are now waiting for them to find a new house.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Seller has found another house</h2>
                <DateComponent date={new Date("2021/08/17")} />

                <p>
                    The seller has found another house and had their offer accepted, also with no chain. Hopefully this
                    will be the end of our waiting.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Seller pulled out of onward purchase again</h2>
                <DateComponent date={new Date("2021/11/02")} />

                <p>
                    Back to waiting, as they decided to pull out of their onward purchase as they didn't like the people
                    who were servicing the property.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Mortgage offer expired</h2>
                <DateComponent date={new Date("2021/12/04")} />

                <p>
                    Our mortgage offer expired today, as its been 6 months, so we have to re-apply. Nothing complicated,
                    and it was approved the same day based on our old application.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Seller has found their 3rd house</h2>
                <DateComponent date={new Date("2022/01/17")} />

                <p>
                    The seller has found another house and had their offer accepted, although this one does have a
                    chain.
                </p>
            </div>

            <div className="timeline__item">
                <h2 className="timeline__itemTitle">Too stressful for the seller</h2>
                <DateComponent date={new Date("2022/02/03")} />

                <p>
                    The seller has decided the whole process is too stressful and have decided not to sell their house,
                    so we are back to viewings again.
                </p>
                <p>
                    So thats just over 8 months gone - thankfully we did start keeping an eye out for other properties.
                    Unfortunately, we didn't see anything we liked as much so didn't make offers. Hindsight is a brutal
                    thing.
                </p>
            </div>
        </div>
    );
};

export default React.memo(Timeline);
