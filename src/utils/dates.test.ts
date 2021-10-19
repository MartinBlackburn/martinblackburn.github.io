// functions under test
import { computerDate, humanDate, padNumber } from "./dates";

describe("computerDate", () => {
    test("returns correctly", () => {
        const date = computerDate(new Date("1986-2-11"));

        expect(date).toEqual("1986-02-11");
    });
});

describe("humanDate", () => {
    test("returns correctly", () => {
        const date = humanDate(new Date("1986-2-11"));

        expect(date).toEqual("11 February 1986");
    });
});

describe("padNumber", () => {
    test("pads number less than 9", () => {
        const number = padNumber(5);

        expect(number).toEqual("05");
    });

    test("doesn't pad number bigger than 9", () => {
        const number = padNumber(10);

        expect(number).toEqual("10");
    });
});
