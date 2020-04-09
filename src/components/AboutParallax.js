import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const AboutParallax = ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "eldorado.jpeg" }) {
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
            title="About Us"
            url={url}
            height={height}
            image={data.data.childImageSharp.fluid}
            alt="About Us"
        />
    );
};

AboutParallax.propTypes = {
    url: PropTypes.string,
    height: PropTypes.string.isRequired,
};

export default AboutParallax;