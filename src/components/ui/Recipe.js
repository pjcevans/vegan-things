// import { Component } from 'react'

const Recipe = (props) =>
  <div>
    {props.item.images.map( image =>
      (image.type === "main") ? (
      <img src={image.url} height="120" width="120"/>
    ) : undefined
    )}



    <h4>{props.item.recipe}</h4>
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
