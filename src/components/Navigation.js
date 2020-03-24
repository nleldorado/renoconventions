import { Link } from "gatsby"
import React, {useState, useEffect} from "react"
import Icon from './Icon'
import { useScrollYPosition } from 'react-use-scroll-position';
import Image from './image'

const Navigation = () => {
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
            background: change ? "rgba(33, 33, 33, 0.95)" : "rgba(33, 33, 33, 0.5)",
            padding: change ? "0 16px" : "20px 16px",
            height: change ? "60px" : "100px",
            transition: "300ms ease"
        };
    
        let logo = {
            width: change ? "120px" : "150px"

        }
        
        let contact = {
            padding: change ? "16px 20px" : "5px 20px",
            background: "orangered",
            borderRadius: change ? "0" : "10px"
        }
    return (
     
            <div className="navigation" style={style}>
                <div className="container">
                    <div className="logo" style={logo}>
                        <Link to="/">
                            <Image/>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li><Link activeClassName="active" to="/">Home</Link></li>
                            <li><Link activeClassName="active" to="/conventions">Convention</Link></li>
                            <li><Link activeClassName="active" to="/sports">Sports</Link></li>
                            <li><Link activeClassName="active" to="/golf">Golf</Link></li>
                            <li><Link activeClassName="active" to="/attractions">Attractions</Link></li>
                            <li><Link activeClassName="active" to="/restaurants">Restaurants</Link></li>     
                        </ul>
                    </div>
                    <div className="contact-link" style={contact}>
                        <ul>
                            <li>
                                <Link activeClassName="active" to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     
    );
};

export default Navigation;