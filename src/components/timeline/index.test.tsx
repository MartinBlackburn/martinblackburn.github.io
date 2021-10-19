// libraries
import { render } from "@testing-library/react";

// component under test
import Timeline from "./";

// mocks
jest.mock("../timelineItem", () => () => <div>timelineItem</div>);

describe("Timeline component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<Timeline />);

        expect(asFragment()).toMatchSnapshot();
    });
});
