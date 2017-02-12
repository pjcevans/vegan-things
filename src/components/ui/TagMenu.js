
const TagMenu = (props) =>
  <div id="filterpane">
    <p>Filter your results:</p>
    <p>Type of meal</p>
    <ul>
      <a onClick={() => props.tagF(props.fTag("recipesize", "snack"))}>Snack ({props.fTag("recipesize", "snack").length})</a>
      <li>Main ({props.fTag("recipesize", "main").length})</li>
      <li>Side ({props.fTag("recipesize", "side").length})</li>
    </ul>
  </div>




export default TagMenu
