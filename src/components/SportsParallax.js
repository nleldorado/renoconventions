import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const SportsParallax = ({url, height, imgHeight}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "baseball.jpg" }) {
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
            title="Sports"
            url={url}
            height={height}
            imgHeight={imgHeight}
            image={data.data.childImageSharp.fluid}
            alt="Sports"
        />
    );
};

SportsParallax.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    height: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
};

export default SportsParallax;