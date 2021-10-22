// libraries
import { render } from "@testing-library/react";

// component under test
import GamingText from "./";

describe("GamingText component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<GamingText />);

        expect(asFragment()).toMatchSnapshot();
    });
});
