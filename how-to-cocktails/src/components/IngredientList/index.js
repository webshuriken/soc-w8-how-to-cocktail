import React from "react";
import Item from "../Item";

function IngredientList({ingredient, measure}) {
    let array = [];
    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient[i] != null) {
            array.push(<Item key={i}>{ingredient[i]}: {measure[i]}</Item>)
        }
    }
    console.log(measure)
    return (
        <ul>
            {array}
        </ul>
    )
}

export default IngredientList;
