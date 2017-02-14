const TagRow = (props) =>
  <tr>
    <td className="tagtype">{props.item}</td>
    <td><input type="checkbox"></input></td>
  </tr>

export default TagRow


// Implement checkbox filtering. Checkboxes should be
// clickable to add a filter. Ideally we can stack
// filters but for now just clear filter and go back
// to search results when one is checked off.
// When a new one is checked, check off the other &
// revert to search data (by using a parameterless call
// to trigger the default behaviour which is set to
// the "last (ie pre-trigger) state"
