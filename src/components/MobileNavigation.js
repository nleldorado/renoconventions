import { Link } from "gatsby"
import React, {useState} from "react"
import useWindowScrollPosition from "@rehooks/window-scroll-position"
import { stack as Menu } from 'react-burger-menu'

const MobileNavigation = () => {
    const [change, setChange] = useState(false);
    const changePosition = 100;
  
    let position = useWindowScrollPosition();
  
    if (position.y > changePosition && !change) {
        setChange(true);
      }
    
    if (position.y <= changePosition && change) {
        setChange(false);
        }
        
  
    let style = {
            background: change ? "rgba(33, 33, 33, 0.9)" : "transparent",
            transition: "300ms ease"
        };

    const showSettings = (event) => {
         event.preventDefault();
    }

    return (
        <div style={style} className="mobile-navigation">
            <Menu>
                <Link id="home" className="menu-item" to="/">Home</Link>
                <Link id="about" className="menu-item" to="/conventions">Conventions</Link>
                <Link id="contact" className="menu-item" to="/sports">Sports</Link>
                <Link id="home" className="menu-item" to="/golf">Golf</Link>
                <Link id="about" className="menu-item" to="/attractions">Attractions</Link>
                <Link id="contact" className="menu-item" to="/restaurants">Restaurants</Link>
                <Link id="home" className="menu-item" to="/gallery">Gallery</Link>
                <Link id="contact" className="menu-item" to="/contact">Contact</Link>
                <p>Connect with us</p>
                <Link id="home" className="menu-item" to="/">Facebook</Link>
                <Link id="contact" className="menu-item" to="/contact">Instagram</Link>
                <Link onClick={ showSettings } className="menu-item--small" to="">Twitter</Link>
            </Menu>
        </div>
    );
};

export default MobileNavigation;