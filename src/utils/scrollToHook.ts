// libraries
import React from "react";

export const useScrollTo = () => {
    const ref = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView();
        }
    }, []);

    return ref;
};
