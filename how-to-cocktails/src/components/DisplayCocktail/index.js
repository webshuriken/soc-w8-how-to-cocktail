import Image from '../Image';
import IngredientList from '../IngredientList';
import Instructions from '../Instructions'


function DisplayCocktail({cocktail, updateCocktail}) {
  const ingredient = [];
  const measure = [];
  for (let i = 1; i <= 15; i++) {
    if (cocktail[`strIngredients${i}`] !== null) {
      ingredient.push(cocktail[`strIngredients${i}`]);
      measure.push(cocktail[`strIngredients${i}`]);
    }
  }

  return (
    <section className="cocktail">
      <h1>cocktail.strDrink</h1>
      <Image image={cocktail.srtDrinkThumb} />
      <IngredientList ingredient={ingredient} measure={measure} />
      <Instructions instructions={cocktail.strInstructions} />
    </section>
  );
}

export default DisplayCocktail;