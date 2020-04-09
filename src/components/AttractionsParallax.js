import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const AttractionsParallax = ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "hot-air-balloon.jpeg" }) {
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
            title="Nearby Attractions"
            url={url}
            height={height}
            image={data.data.childImageSharp.fluid}
            alt="Nearby Attractions"
        />
    );
};

AttractionsParallax.propTypes = {
    url: PropTypes.string,
    height: PropTypes.string.isRequired,
};

export default AttractionsParallax;