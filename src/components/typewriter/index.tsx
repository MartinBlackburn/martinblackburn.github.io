import React from "react";

// styles
import "./styles.scss";

enum Status {
    WRITE = "write",
    DELETE = "delete",
}

const words = ["Web developer", "Manager", "Mentor", "Runner", "Maker", "Gamer"];

let status: Status = Status.WRITE;
let currentWordIndex = 0;
let currentLetterIndex = 0;
let interval: NodeJS.Timer;

const Typewriter = () => {
    const [text, setText] = React.useState("");

    React.useEffect(() => {
        if (interval) {
            clearInterval(interval);
        }

        interval = setInterval(() => {
            if (status === Status.WRITE) {
                const wordToWrite = words[currentWordIndex];
                const newText = wordToWrite.substring(0, currentLetterIndex);

                setText(newText);

                currentLetterIndex++;

                if (currentLetterIndex > wordToWrite.length + 10) {
                    status = Status.DELETE;
                }
            } else {
                const newText = text.substring(0, currentLetterIndex);

                setText(newText);

                currentLetterIndex--;

                if (currentLetterIndex === 0) {
                    status = Status.WRITE;

                    currentWordIndex++;
                    if (currentWordIndex >= words.length) {
                        currentWordIndex = 0;
                    }
                }
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [text]);

    return <div className="typewriter">{text}</div>;
};

export default React.memo(Typewriter);
