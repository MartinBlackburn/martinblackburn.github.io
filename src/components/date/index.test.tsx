// libraries
import { render } from "@testing-library/react";

// component under test
import DateComponent from "./";

describe("Date component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<DateComponent date={new Date("1986-02-11")} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
