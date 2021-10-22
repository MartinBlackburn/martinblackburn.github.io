// libraries
import { render } from "@testing-library/react";

// component under test
import ShootingText from "./";

describe("ShootingText component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<ShootingText />);

        expect(asFragment()).toMatchSnapshot();
    });
});
