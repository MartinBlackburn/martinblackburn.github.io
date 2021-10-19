// libraries
import { render } from "@testing-library/react";

// component under test
import Nav from "./";

describe("Nav component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
});
