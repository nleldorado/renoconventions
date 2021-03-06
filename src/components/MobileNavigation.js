import { Link } from "gatsby"
import React, { useState } from "react"
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

    const links = [
        {path: "/", name: "Home"},
        {path: "/conventions", name: "Conventions"},
        {path: "/sports", name: "Sports"},
        {path: "/golf", name: "Golf"},
        {path: "/attractions", name: "Attractions"},
        {path: "/restaurants", name: "Restaurants"},
        {path: "/team", name: "Team"},
        {path: "/gallery", name: "Gallery"}
    ]

    const socialLinks = [
        {path: "/#", name:"Facebook"},
        {path: "/#", name:"Instagram"},
        {path: "/#", name:"Twitter"}
    ]

    return (
        <div style={style} className="mobile-navigation">
            <Menu>
                {
                    links.map((link, index) => (
                        <Link activeStyle={{ color: "orangered" }} className="menu-item" to={link.path} key={index}>
                            {link.name}
                        </Link>
                    ))
                }
                <p>Connect with us</p>
                {
                    socialLinks.map((link, index) => (
                        <Link activeStyle={{ color: "orangered" }} className="menu-item" to={link.path} target="_blank" key={index}>
                            {link.name}
                        </Link>
                    ))
                }
            </Menu>
        </div>
    );
};

export default MobileNavigation;