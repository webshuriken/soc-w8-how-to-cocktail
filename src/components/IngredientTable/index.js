import React from "react";


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
