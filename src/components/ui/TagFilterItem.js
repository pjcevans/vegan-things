const TagFilterItem = (props) =>
  <p><a className={props.clicked}
        onClick={() => props.toggleTagFilter(props.item)}>
          {props.item}</a>  
  </p>

export default TagFilterItem
