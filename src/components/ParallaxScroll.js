import React from 'react';
import {Link} from 'gatsby'
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
import PropTypes from "prop-types"

const ParallaxScroll = ({title, imgHeight, height, image, url, alt}) => {
    return ( 
        <Parallax strength={-200}>
            <Background className="parallax-custom-bg" >
                <Fade>
                    <Img fluid={image} alt={alt} style={{ height: imgHeight }} />
                </Fade>
            </Background>

            <div className="parallax-wrapper" style={{ height: height }}>
                <Fade up>
                    {url ? (
                        <Link to={url}>
                            <h1>{title}</h1>
                        </Link>
                    ) : (
                            <h1>{title}</h1>
                        )}
                </Fade>
            </div>
        </Parallax>        
    );
};

ParallaxScroll.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    height: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired, 
};

export default ParallaxScroll;