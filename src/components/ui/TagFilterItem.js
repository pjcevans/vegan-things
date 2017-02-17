const TagFilterItem = (props) =>
  <p><a onClick={() => props.toggleTagFilter(props.item)}>
          {props.item} <span className="close">x</span></a>
  </p>

export default TagFilterItem
