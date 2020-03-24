import { Link } from "gatsby"
import React, {useState, useEffect} from "react"
import { stack as Menu } from 'react-burger-menu'
import { useScrollYPosition } from 'react-use-scroll-position';


const MobileNavigation = () => {
    const [change, setChange] = useState(false);
    const changePosition = 100;

    const scrollY = useScrollYPosition()

    if (scrollY > changePosition && !change) {
        setChange(true);
      }
    
    if (scrollY <= changePosition && change) {
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
                <Link activeStyle={{ color: "orangered" }} id="home" className="menu-item" to="/">Home</Link>
                <Link activeStyle={{ color: "orangered" }} id="about" className="menu-item" to="/conventions">Conventions</Link>
                <Link activeStyle={{ color: "orangered" }} id="contact" className="menu-item" to="/sports">Sports</Link>
                <Link activeStyle={{ color: "orangered" }} id="home" className="menu-item" to="/golf">Golf</Link>
                <Link activeStyle={{ color: "orangered" }} id="about" className="menu-item" to="/attractions">Attractions</Link>
                <Link activeStyle={{ color: "orangered" }} id="contact" className="menu-item" to="/restaurants">Restaurants</Link>
                <Link activeStyle={{ color: "orangered" }} id="home" className="menu-item" to="/gallery">Gallery</Link>
                <Link activeStyle={{ color: "orangered" }} id="contact" className="menu-item" to="/contact">Contact</Link>
                <p>Connect with us</p>
                <Link activeStyle={{ color: "orangered" }} id="home" className="menu-item" to="/#">Facebook</Link>
                <Link activeStyle={{ color: "orangered" }} id="contact" className="menu-item" to="/#">Instagram</Link>
                <Link activeStyle={{ color: "orangered" }} onClick={ showSettings } className="menu-item--small" to="/#">Twitter</Link>
            </Menu>
        </div>
    );
};

export default MobileNavigation;