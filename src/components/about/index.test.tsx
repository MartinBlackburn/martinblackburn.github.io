// libraries
import { render } from "@testing-library/react";

// component under test
import About from ".";

describe("About component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
});
