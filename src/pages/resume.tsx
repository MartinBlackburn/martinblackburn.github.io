//libraries
import React from "react";

// components
import EmploymentHistory from "../components/timeline/employmentHistory";
import Education from "../components/timeline/education";

const HomePage = () => {
    return (
        <React.Fragment>
            <EmploymentHistory />
            <Education />
        </React.Fragment>
    );
};

export default HomePage;
