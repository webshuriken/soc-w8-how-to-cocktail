import React from "react";
import Item from "../Item";


function IngredientTable({ingredients}) {
  return (
    <table>
      <tbody>
      {ingredients.map(({ingredient, measure}, i) => (
        <tr key={i}>
          <td>{ingredient}</td>
          <td>{measure}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default IngredientTable;
