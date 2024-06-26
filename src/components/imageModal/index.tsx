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
        const onClick = (event: MouseEvent) => {
            const target = event.target as HTMLImageElement;

            if (target.nodeName === "IMG" && target.src && target.classList.contains("enlarge")) {
                setImage(target.src);
            }
        };

        const onKeyUp = (event: KeyboardEvent) => {
            // on pressing escape close the modal
            if (event.key === "Escape") {
                setImage("");
            }

            // on pressing left, find the previous image and show it
            if (event.key === "ArrowLeft") {
                const images = document.querySelectorAll(".enlarge") as NodeListOf<HTMLImageElement>;
                let previousImage = "";

                images.forEach((img, index) => {
                    if (img.src === image && index > 0) {
                        previousImage = images[index - 1].src;
                    }
                });

                if (!previousImage) {
                    previousImage = images[images.length - 1].src;
                }

                setImage(previousImage);
            }

            // on pressing right, find the next image and show it
            if (event.key === "ArrowRight") {
                const images = document.querySelectorAll(".enlarge") as NodeListOf<HTMLImageElement>;
                const currentImage = image;
                let nextImage = "";

                images.forEach((img, index) => {
                    if (img.src === currentImage && index < images.length - 1) {
                        nextImage = images[index + 1].src;
                    }
                });

                if (!nextImage) {
                    nextImage = images[0].src;
                }

                setImage(nextImage);
            }
        };

        window.addEventListener("click", onClick, true);

        window.addEventListener("keyup", onKeyUp, true);

        return () => {
            window.removeEventListener("click", onClick, true);
            window.removeEventListener("keyup", onKeyUp, true);
        };
    }, [image]);

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
