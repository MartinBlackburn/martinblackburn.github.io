// constants
import { monthArray } from "../constants/months";

export const padNumber = (number: number) => {
    return String(number <= 9 ? "0" + number : number);
};

export const humanDate = (date: Date) => {
    const day = date.getDate();
    const month = monthArray[date.getMonth()];
    const year = date.getFullYear();

    return `${padNumber(day)} ${month} ${year}`;
};

export const computerDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${padNumber(month)}-${padNumber(day)}`;
};
