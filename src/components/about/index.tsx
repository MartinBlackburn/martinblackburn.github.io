import React from "react";

// styles
import "./styles.scss";

const About = () => {
    return (
        <section className="about">
            <h1>
                I'm a lead software engineer, specialising in <strong>JavaScript/TypeScript</strong>,{" "}
                <strong>React</strong> and <strong>mentoring other aspiring developers</strong>.
            </h1>
        </section>
    );
};

export default React.memo(About);
