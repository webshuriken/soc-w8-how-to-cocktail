import React from "react";


function IngredientTable({ingredients}) {
  return (
    <div className='relative border-2 border-cocktail-fuchsia-100 rounded-lg p-4 shadow-cocktail-fuchsia overflow-hidden'>
      <span className='block absolute -inset-0 rounded-md shadow-inner-cocktail-fuchsia' aria-hidden="true"></span>
      <h3 className='text-shadow-cocktail-fuchsia-neon font-bold'>Ingredients</h3>
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
    </div>
  )
}

export default IngredientTable;
