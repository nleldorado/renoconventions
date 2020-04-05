import React from 'react';
import {Link} from 'gatsby'
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

const ParallaxScroll = ({url, title, height, image, fixedImage, alt}) => {
    return ( 
        <Parallax strength={-200}>
            <Background className="parallax-custom-bg" >
                <Img fixed={fixedImage} fluid={image} alt={alt} />
            </Background>
            <div className="parallax-wrapper" style={{height: height}}>
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

export default ParallaxScroll;