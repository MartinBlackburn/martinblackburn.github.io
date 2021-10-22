// libraries
import { render } from "@testing-library/react";

// component under test
import ClimbingText from "./";

describe("ClimbingText component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<ClimbingText />);

        expect(asFragment()).toMatchSnapshot();
    });
});
