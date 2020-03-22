import { Link } from "gatsby"
import React, {useState} from "react"
import useWindowScrollPosition from "@rehooks/window-scroll-position"
import '../sass/main.scss'
import Image from './Image'
import Icon from './Icon'

const Navigation = () => {
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
            // background: change ? "#232526" : "transparent",
            // background: change ? "-webkit-linear-gradient(to right, #7700FF, #4400FF)" : "transparent",
            // background: change ? "#f05123" : "linear-gradient(to right top, #f84426, #fa5223be, #fc5e1fcb, #fe6b1c9c, #ff761a9d)",

            background: change ? "rgba(33, 33, 33, 0.9)" : "rgba(33, 33, 33, 0.5)",
            padding: change ? "0 16px" : "20px 16px",
            height: change ? "60px" : "100px",
            transition: "300ms ease"
        };
    
        let logo = {
            width: change ? "120px" : "150px"

        }
        
        let contact = {
            padding: change ? "16px 20px" : "5px 20px",
            background: "orangered"
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
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/conventions"><li>Conventions</li></Link>
                            <Link to="/sports"><li>Sports</li></Link>
                            <Link to="/golf"><li>Golf</li></Link>
                            <Link to="/attractions"><li>Attractions</li></Link>
                            <Link to="/restaurants"><li>Restaurants</li></Link>          
                        </ul>
                    </div>
                    <div className="contact-link" style={contact}>
                       <span className="envelope"><Icon to={'/contact'} text={"Contact Us"} /></span>
                    </div>
                </div>
            </div>
     
    );
};

export default Navigation;