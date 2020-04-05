import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"

const GolfParallax = ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "golf.jpeg" }) {
                childImageSharp {
                    fixed(quality: 100, height: 1000) {
                    ...GatsbyImageSharpFixed
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
            image={data.data.childImageSharp.fixed}
            alt="Golf Courses"
        />
    );
};

export default GolfParallax;