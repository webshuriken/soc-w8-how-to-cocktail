import React from "react";
import Item from "../Item";

function IngredientList(props, Item) {
    //loop or map through props.drinks.strIngredient1-15 & props.drinks.strIngredient1-15
    //if value of either at [i] is not != null return it in Item
    //Object.values()??
    return (
        <ul>

        </ul>
    )
}

export default IngredientList;

// for (let i = 1; i <= 15; i++)
// if (drinks[0].strIngredient[i] && drinks[0].strMeasure[i] != null) {
//     return <Item>{drinks[0][`strIngredient${i}`]}: {drinks[0][`strMeasure${i}`]}</Item>
// }