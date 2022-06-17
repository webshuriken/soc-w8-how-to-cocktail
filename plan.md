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
  cocktailState

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
