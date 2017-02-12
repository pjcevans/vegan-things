// import { Component } from 'react'

const Recipe = (props) =>
  <div className="reciperesult">
    {props.item.images.map( image =>
      (image.type === "main") ? (
      <img src={image.url} height="160" width="160"/>
    ) : undefined
    )}
    <h4>{props.item.name}</h4>
  </div>




export default Recipe

// <div>
// Ingredients list:
// <ul>
//   {props.item.ingredients.map( ingredient =>
//     <li key="ingredient.type">{ingredient.quantity} {ingredient.unit} of {ingredient.type}</li>
//   )}
// </ul>
// </div>
