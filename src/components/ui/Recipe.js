// import { Component } from 'react'

const Recipe = (props) =>
  <div className="reciperesult">
    {props.item.images.map( (image, id) =>
      (image.type === "main") ? (
      <a href={"#/recipes/" + props.item.id}><img key={id} src={image.url} height="160" width="160"/></a>
    ) : undefined
    )}
    <h4><a href={"#/recipes/" + props.item.id}>{props.item.name}</a></h4>
  </div>




export default Recipe
