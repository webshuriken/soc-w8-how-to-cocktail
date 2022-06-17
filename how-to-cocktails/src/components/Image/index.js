import React from "react";

function Image(props) {
    return (
        <img src={props.drinks.strDrinkThumb} alt={props.drinks.strDrink}/>
    )
}

export default Image;