// libraries
import { render } from "@testing-library/react";

// component under test
import Hobby from "./";

describe("Hobby component", () => {
    test("renders correctly", () => {
        const TextComponent = () => {
            return <p>some text about climbing</p>;
        };

        const { asFragment } = render(<Hobby title="Climbing" image="climbing.png" text={<TextComponent />} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
