// libraries
import React from "react";

// utils
import { computerDate, humanDate } from "../../utils/dates";

// types
interface IComponentProps {
    date: Date;
}

const DateComponent = (props: IComponentProps) => {
    return <time dateTime={computerDate(props.date)}>{humanDate(props.date)}</time>;
};

export default React.memo(DateComponent);
