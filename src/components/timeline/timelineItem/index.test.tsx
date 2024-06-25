// libraries
import { render } from "@testing-library/react";

// component under test
import TimelineItem from ".";

describe("TimelineItem component", () => {
    describe("renders correctly", () => {
        test("without dark mode", () => {
            const { asFragment } = render(<TimelineItem startDate="1986/02/11" title="some title" />);

            expect(asFragment()).toMatchSnapshot();
        });

        test("with dark mode", () => {
            const { asFragment } = render(<TimelineItem startDate="1986/02/11" title="some title" dark={true} />);

            expect(asFragment()).toMatchSnapshot();
        });

        test("with children", () => {
            const { asFragment } = render(
                <TimelineItem startDate="1986/02/11" title="some title">
                    <div>test</div>
                </TimelineItem>
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
