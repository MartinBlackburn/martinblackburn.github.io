import React from "react";

// styles
import "./styles.scss";

// types
interface IComponentProps {
    title?: string;
    imagePath?: string;
}

const ImageModal = (props: IComponentProps) => {
    const [image, setImage] = React.useState("");

    React.useEffect(() => {
        window.addEventListener("click", (event) => {
            const target = event.target as HTMLImageElement;

            if (target.nodeName === "IMG" && target.src && !target.classList.contains("banner__profile")) {
                setImage(target.src);
            }
        });
    }, []);

    if (!image) {
        return null;
    }

    return (
        <div className="imageModal" onClick={() => setImage("")}>
            <div className="imageModal__content">
                <div className="imageModal__close" onClick={() => setImage("")}>
                    x
                </div>

                <img src={image} alt={`${props.title}`} />
            </div>
        </div>
    );
};

export default React.memo(ImageModal);
