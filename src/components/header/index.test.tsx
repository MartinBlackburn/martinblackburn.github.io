// libraries
import { render } from "@testing-library/react";

// component under test
import Header from "./";

// mocks
jest.mock("../typewriter", () => () => <div>typewriter</div>);

describe("Header component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<Header />);

        expect(asFragment()).toMatchSnapshot();
    });
});
