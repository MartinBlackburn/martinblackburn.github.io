// libraries
import { render } from "@testing-library/react";

// component under test
import TimelineItem from ".";

describe("TimelineItem component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<TimelineItem />);

        expect(asFragment()).toMatchSnapshot();
    });
});
