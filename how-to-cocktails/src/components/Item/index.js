import React from "react";

//this needs to display both object values from mapped function

function Item({ingredient, measure}) {
    return (
        <p>{ingredient}: {measure}</p>
    )
}

export default Item;