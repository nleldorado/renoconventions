import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const ContactParallax = ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "contact.jpeg" }) {
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
            title="Contact Us"
            url={url}
            height={height}
            image={data.data.childImageSharp.fluid}
            alt="Contact Us"
        />
    );
};

ContactParallax.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    height: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
};

export default ContactParallax;