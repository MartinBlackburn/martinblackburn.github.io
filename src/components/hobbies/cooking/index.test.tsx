// libraries
import { render } from "@testing-library/react";

// component under test
import CookingText from "./";

describe("CookingText component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<CookingText />);

        expect(asFragment()).toMatchSnapshot();
    });
});
