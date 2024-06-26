// libraries
import { render } from "@testing-library/react";

// component under test
import ContentBlock from ".";

describe("ContentBlock component", () => {
    test("renders correctly with image left", () => {
        const TextComponent = () => {
            return <p>some text</p>;
        };

        const { asFragment } = render(
            <ContentBlock title="Climbing" imagePath="climbing.png" imageRight={false}>
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
            <ContentBlock title="Climbing" imagePath="climbing.png" imageRight={true}>
                <TextComponent />
            </ContentBlock>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
