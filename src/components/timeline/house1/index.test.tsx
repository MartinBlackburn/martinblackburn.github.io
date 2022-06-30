// libraries
import { render } from "@testing-library/react";

// component under test
import House1Timeline from ".";

describe("House1Timeline component", () => {
    test("without dark mode", () => {
        const { asFragment } = render(<House1Timeline />);

        expect(asFragment()).toMatchSnapshot();
    });
});
