// libraries
import { act, render } from "@testing-library/react";

// component under test
import Typewriter from "./";

// mocks
jest.useFakeTimers();
jest.spyOn(global, "setInterval");
jest.spyOn(global, "clearInterval");

describe("Typewriter component", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    test("renders correctly", () => {
        const { asFragment } = render(<Typewriter />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders correctly after 1.4 seconds", () => {
        const { asFragment, rerender } = render(<Typewriter />);

        act(() => {
            jest.advanceTimersByTime(1400);
        });

        expect(asFragment()).toMatchSnapshot();
    });

    test("renders correctly after 5 seconds", () => {
        const { asFragment, rerender } = render(<Typewriter />);

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        expect(asFragment()).toMatchSnapshot();
    });

    test("calls setInterval on mount", () => {
        render(<Typewriter />);

        expect(setInterval).toHaveBeenCalledTimes(1);
    });

    test("calls clearInterval on unmount", () => {
        const { unmount } = render(<Typewriter />);

        unmount();

        expect(clearInterval).toHaveBeenCalledTimes(1);
    });
});
