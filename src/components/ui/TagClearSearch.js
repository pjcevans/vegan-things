const TagClearAll = (props) =>
  <div>
    <p>Searching for: <a onClick={() => props.clearSearch()}>
            {props.searchTerm} <span className="close">x</span></a>
    </p>
  </div>

export default TagClearAll
