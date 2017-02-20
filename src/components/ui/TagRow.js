const TagRow = (props) =>
  <tr>
    <td className="tagtype"><a className={props.clicked}
                               onClick={() => props.toggleTagFilter(props.item)}>
                               {props.item} ({props.filterByTag(props.item).length})
                            </a></td>
  </tr>

export default TagRow

// The call to: ({props.filterByTag(props.item).length}) is extremely
// inefficient as it is called for each tag item. It would be much
// better to populate tag numbers as top level state and pass them
// down rather than having a component call functions
