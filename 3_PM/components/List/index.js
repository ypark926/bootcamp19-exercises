import React from "react";

const listItems = numbers.map((number) =>
<li>{number}</li>)

const List = ({listItems}) => (
    <ul>
        listItems
    </ul>
);

export default List;
