# Components Plan

## App

Cocktail useReducer

- For MVP only one state of cocktail to change on each URI request
  handleClick function (to call reducer)

## SearchByName second state (name) here

- state
  text (inside the input)

- props
  handleClick

- behaviour
  onClick will call the handleClick prop and pass the state to the App component

## RandomSearch

- props
  handleClick

- behaviour
  onClick fetch API and then update cocktail and call handleClick passing the API

## DisplayCocktail Cocktail State props passed down

- props

  - cocktailState
  - updateCocktail

- render

  - CocktailName
  - Image
  - IngredientList
  - Item
  - Instructions

## CocktailName

- props
  name

- render
  Heading/p/h(num) for landing page title. Change state to cocktail name

## Image

- props
  image

- render
  cocktail.strThumb

## IngredientList

- props
  items

- render
  ul for ingredient list (.map())

## Item

- props
  ingredient
  measure

- render
  li elements for cocktail.strIngredient[i] cocktail.strMeasure[i]

## Instructions

- props
  instruction

- render
  p element for instructions with cocktail.strInstructions


## API response structure

```js
const drink = [
    {
        "idDrink": "17207",
        "strDrink": "Pina Colada",
        "strDrinkAlternate": null,
        "strTags": "IBA,ContemporaryClassic",
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": "Contemporary Classics",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Collins glass",
        "strInstructions": "Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.",
        "strInstructionsES": null,
        "strInstructionsDE": "Mit zerstoßenem Eis im Mixer mischen, bis es glatt ist. In ein gekühltes Glas geben, garnieren und servieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Mescolare con ghiaccio tritato in un frullatore fino a che liscio.\r\nVersare in un bicchiere freddo, guarnire e servire.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/upgsue1668419912.jpg",
        "strIngredient1": "Light rum",
        "strIngredient2": "Coconut milk",
        "strIngredient3": "Pineapple",
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "3 oz ",
        "strMeasure2": "3 tblsp ",
        "strMeasure3": "3 tblsp ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": "https://www.thecocktaildb.com/images/media/drink/upgsue1668419912.jpg",
        "strImageAttribution": "TheCocktailDB",
        "strCreativeCommonsConfirmed": "Yes",
        "dateModified": "2017-09-02 17:55:46"
    }
]
```