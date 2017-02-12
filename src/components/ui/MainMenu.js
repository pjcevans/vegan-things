import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav>
            <Link to="/"><FaHome /></Link>
            <Link to="gallery"
            	  activeStyle={{
            	  backgroundColor: "white",
            	  color: "slategray"
            	}}>
            	Gallery
            </Link>
            <Link to="search"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "slategray"
            	  }}>
            	Search
           	</Link>
        </nav>
    )
}

export default MainMenu
