// libraries
import { render } from "@testing-library/react";

// component under test
import TimelineItem from "./";

// mocks
jest.mock("../Date", () => () => <div>date component</div>);

describe("TimelineItem component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(
            <TimelineItem title="some title" text="some text" date={new Date("1986-2-11")} />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
