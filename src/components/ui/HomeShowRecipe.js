const HomeShowRecipe = (props) =>
  <div className="show-next-item-button">
    <button onClick={() => props.showAnotherRecipe()}>Show next recipe...</button>
  </div>

export default HomeShowRecipe
