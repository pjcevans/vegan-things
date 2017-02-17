const TagClearAll = (props) =>
  <p><a onClick={() => props.clearAllTagsAndSearch()}>
          Clear All <span className="close">x</span></a>
  </p>

export default TagClearAll
