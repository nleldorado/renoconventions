import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"

const GalleryParallax= ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "gallery.jpeg" }) {
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
                title="Gallery"
                url={url}
                height={height}
                image={data.data.childImageSharp.fluid}
                alt="Gallery"
        />
    );
};

export default GalleryParallax;