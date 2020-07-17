import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const GolfParallax = ({url, height, imgHeight}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "tahoe-golf.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Parallax
            title="Golf Courses"
            url={url}
            height={height}
            imgHeight={imgHeight}
            image={data.data.childImageSharp.fluid}
            alt="Golf Courses"
        />
    );
};

GolfParallax.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    height: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
};

export default GolfParallax;