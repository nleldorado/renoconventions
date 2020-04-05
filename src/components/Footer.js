import React from 'react';
import {Link} from 'gatsby'
import '../utils/fontawesome'
import Icon from './Icon'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Twitter from '../images/twitter.svg'

const Footer = () => {
    return (
        <div>
            <footer>
          
                <div className="footer">
               
                    <div className="services">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/#">Link 1</Link></li>
                            <li><Link to="/#">Link 2</Link></li>
                            <li><Link to="/#">Link 3</Link></li>
                            <li><Link to="/#">Link 4</Link></li>
                            <li><Link to="/#">Link 5</Link></li>
                        </ul>
                    </div>
                    <div className="pages">
                        <h3>Page Links</h3>
                        <ul>
                            <li><Link to="/#">Link 1</Link></li>
                            <li><Link to="/#">Link 2</Link></li>
                            <li><Link to="/#">Link 3</Link></li>
                            <li><Link to="/#">Link 4</Link></li>
                            <li><Link to="/#">Link 5</Link></li>
                        </ul>
                    </div>
                    <div className="follow">
                        <h3>Follow Us</h3>
                    <ul>
                                <li>
                                    <a href="/">
                                        <img className="social facebook" src={Facebook} alt="Facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img className="social instagram" src={Instagram} alt="Instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img className="social twitter" src={Twitter} alt="Instagram" />
                                    </a>
                                </li>
       
                        </ul>
                    </div>
                    <div className="subscribe">
                        <h3>Newsletter</h3>
                        <p>Sign up for our email newsletters and stay 
                            <br/>
                           informed of all the latest happenings in Reno!</p>
                        <form action="#">
                            <input type="text" className="subscribe_input" placeholder="Enter Email Address" />
                            <span className="icon"><Icon icon={'paper-plane'} /></span>
                        </form>
                    </div>
                </div>
            
                © {new Date().getFullYear()}, 
                {` `}
                <Link to="/">Reno Conventions. All Rights Reserved</Link>
            </footer>
        </div>
    );
};

export default Footer;