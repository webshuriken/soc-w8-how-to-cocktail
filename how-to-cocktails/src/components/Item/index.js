import React from "react";

//this needs to display both object values from mapped function

function Item(props) {
    return (
        <p>{props.strIngredient}: {props.strMeasure}</p>
    )
}

export default Item;