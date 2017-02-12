
const TagMenu = (props) =>
  <div id="filterpane">
    <p>Filter your results:</p>
    <p>Type of meal</p>
    <ul>
      <a onClick={() => props.tagClickFilter(props.filterByTag("recipesize", "snack"))}>Snack ({props.filterByTag("recipesize", "snack").length})</a>
      <li>Main ({props.filterByTag("recipesize", "main").length})</li>
      <li>Side ({props.filterByTag("recipesize", "side").length})</li>
    </ul>
  </div>




export default TagMenu
