import FaDown from 'react-icons/lib/fa/chevron-down'


const HomeShowRecipe = (props) =>
  <div className="show-next-block">
    <button className="show-next-button" onClick={() => props.showAnotherRecipe()}>Show next recipe...<br /> <FaDown /></button>
  </div>

export default HomeShowRecipe
