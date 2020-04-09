import React from 'react';
import PropTyoes from 'prop-types'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade';

const Feature = ({title, content, image, alt, url}) => {
    return (
        <div className="container">
            <div className="feature">
                <div className="feature-content">
                    <h4>{title}</h4>
                    <p>{content}
                    <br/>
                    <Link to={url}>Learn More</Link>
                    </p>
                    {/* <Link to={url}>Learn More</Link> */}
                </div>
                <div className="feature-img">
                    <img src={image} alt={alt} />
                </div>
            </div>
        </div>
    );
};

export default Feature;