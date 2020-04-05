import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"

const ConventionsParallax = ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "show-room.jpg" }) {
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
            title="Conventions"
            url={url}
            height={height}
            image={data.data.childImageSharp.fluid}
            alt="Conventions"
        />
    );
};

export default ConventionsParallax;