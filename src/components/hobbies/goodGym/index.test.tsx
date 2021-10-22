// libraries
import { render } from "@testing-library/react";

// component under test
import GoodGymText from "./";

describe("GoodGymText component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<GoodGymText />);

        expect(asFragment()).toMatchSnapshot();
    });
});
