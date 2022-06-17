import Image from '../Image';
import IngredientList from '../IngredientList';
import Instructions from '../Instructions'


function DisplayCocktail({cocktail, updateCocktail}) {
  const ingredient = [];
  const measure = [];
  for (let i = 1; i <= 15; i++) {
    if (cocktail[`strIngredient${i}`] !== null) {
      ingredient.push(cocktail[`strIngredient${i}`]);
      measure.push(cocktail[`strMeasure${i}`]);
    }
  }

  return (
    <section className="cocktail">
      <h1>{cocktail.strDrink}</h1>
      <Image src={cocktail.strDrinkThumb} />
      {/* <IngredientList ingredient={ingredient} measure={measure} /> */}
      <Instructions instructions={cocktail.strInstructions} />
    </section>
  );
}

export default DisplayCocktail;