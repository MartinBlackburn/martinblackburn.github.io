// libraries
import { render } from "@testing-library/react";

// component under test
import Hobbies from "./";

// mocks
jest.mock("./hobby", () => () => <div>hobby</div>);

describe("Hobbies component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<Hobbies />);

        expect(asFragment()).toMatchSnapshot();
    });
});
