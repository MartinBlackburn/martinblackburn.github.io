// libraries
import { render } from "@testing-library/react";

// component under test
import ContentBlock from ".";
import { ImagePosition } from "../../constants/imagePosition";

describe("ContentBlock component", () => {
    test("renders correctly with image left", () => {
        const TextComponent = () => {
            return <p>some text</p>;
        };

        const { asFragment } = render(
            <ContentBlock title="Climbing" imagePath="climbing.png" imagePosition={ImagePosition.LEFT}>
                <TextComponent />
            </ContentBlock>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders correctly with image right", () => {
        const TextComponent = () => {
            return <p>some text</p>;
        };

        const { asFragment } = render(
            <ContentBlock title="Climbing" imagePath="climbing.png" imagePosition={ImagePosition.RIGHT}>
                <TextComponent />
            </ContentBlock>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders correctly with image full", () => {
        const TextComponent = () => {
            return <p>some text</p>;
        };

        const { asFragment } = render(
            <ContentBlock title="Climbing" imagePath="climbing.png" imagePosition={ImagePosition.FULL}>
                <TextComponent />
            </ContentBlock>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
