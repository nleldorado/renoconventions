import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const TeamParallax = ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "team.jpeg" }) {
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
                title="Meet The Team"
                url={url}
                height={height}
                image={data.data.childImageSharp.fluid}
                alt="Meet the team"
        />
    );
};

TeamParallax.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    height: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
};

export default TeamParallax;