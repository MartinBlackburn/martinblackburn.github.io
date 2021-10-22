import React from "react";

// styles
import "./styles.scss";

const Brands = () => {
    return (
        <section className="brands">
            <h1>Brands I've worked with:</h1>

            <div className="brands__images">
                <img src="/images/brands/bbc.png" alt="bbc logo" />
                <img src="/images/brands/gripple.png" alt="gripple logo" />
                <img src="/images/brands/guardian jobs.png" alt="guardian jobs logo" />
                <img src="/images/brands/lapicida.png" alt="lapicida logo" />
                <img src="/images/brands/national club golfer.png" alt="national club golfer logo" />
                <img src="/images/brands/new scientist.png" alt="wren kitchens logo" />
                <img src="/images/brands/sky betting.png" alt="sky betting logo" />
                <img src="/images/brands/washington post.png" alt="washington post logo" />
                <img src="/images/brands/wren kitchens.png" alt="wren kitchens logo" />
            </div>
        </section>
    );
};

export default React.memo(Brands);
