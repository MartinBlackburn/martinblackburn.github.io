// libraries
import { render } from "@testing-library/react";

// component under test
import Brands from "./";

describe("Brands component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<Brands />);

        expect(asFragment()).toMatchSnapshot();
    });
});
