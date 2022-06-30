// libraries
import { render } from "@testing-library/react";

// component under test
import Timeline from ".";

describe("Timeline component", () => {
    test("with profile image", () => {
        const { asFragment } = render(<Timeline />);

        expect(asFragment()).toMatchSnapshot();
    });
});
