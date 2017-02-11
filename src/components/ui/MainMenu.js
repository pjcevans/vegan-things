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
            <Link to="testhome"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "slategray"
            	  }}>
            	TestHome
           	</Link>
        </nav>
    )
}

export default MainMenu
