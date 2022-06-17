import React from "react";
import Item from "../Item";

function IngredientList({ingredient, measure}) {
    let array = [];
    for (let i = 1; i <= 15; i++)
    if (ingredient[i] && measure[i] != null) {
        array.push(<Item>{ingredient[i]}: {measure[i]}</Item>)
    }
    return (
        <ul>
            {array}
        </ul>
    )
}

export default IngredientList;
