// libraries
import { render } from "@testing-library/react";

// component under test
import Timeline from ".";

describe("Timeline component", () => {
    describe("renders correctly", () => {
        test("without dark mode", () => {
            const { asFragment } = render(<Timeline title="some title" />);

            expect(asFragment()).toMatchSnapshot();
        });

        test("with dark mode", () => {
            const { asFragment } = render(<Timeline title="some title" dark={true} />);

            expect(asFragment()).toMatchSnapshot();
        });

        test("with children", () => {
            const { asFragment } = render(
                <Timeline title="some title" dark={true}>
                    <div>test</div>
                </Timeline>
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
