// libraries
import { render, fireEvent, screen } from "@testing-library/react";

// component under test
import NavComponent from "./";

describe("Nav component", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<NavComponent onClick={jest.fn()} />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("calls the on click when needed", () => {
        const onClick = jest.fn();
        render(<NavComponent onClick={onClick} />);

        fireEvent.click(screen.getByText("Home"));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
