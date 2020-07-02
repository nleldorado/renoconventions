import React from 'react';
import PropTypes from 'prop-types'
// import Img from 'gatsby-image'
import {Link} from 'gatsby'
// import Fade from 'react-reveal/Fade';

const Feature = ({title, content, image, alt, url}) => {
    return (
        <div className="container">
            <div className="feature">
                <div className="feature-content">
                    <h4>{title}</h4>
                    <p>{content}
                        <br />
                        <Link to={url}>Learn More</Link>
                    </p>
                </div>
                <div className="feature-img">
                    <img src={image} alt={alt} />
                </div>
            </div>
        </div>
    );
};

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string,
    alt: PropTypes.string.isRequired, 
};

export default Feature;