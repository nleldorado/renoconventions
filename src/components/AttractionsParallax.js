import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"

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

export default AttractionsParallax;