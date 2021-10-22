// libraries
import React from "react";

const GoodGym = () => {
    return (
        <React.Fragment>
            <p>
                I recently joined <a href="http://www.yorkrifle.club/">York rifle club</a>. It's still early days and
                I'm not a great shot, but it's a fun sport and everyone is incredible friendly and helpful. Looking
                forward to seeing how much I improve over the next few months.
            </p>
        </React.Fragment>
    );
};

export default React.memo(GoodGym);
