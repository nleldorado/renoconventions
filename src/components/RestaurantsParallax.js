import React from 'react';
import Parallax from '../components/ParallaxScroll'
import { useStaticQuery, graphql } from "gatsby"

const RestaurantsParallax = ({url, height}) => {
    const data = useStaticQuery(graphql`
        query {
            data: file(relativePath: { eq: "food.jpeg" }) {
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
            title={"Restaurants"}
            url={url}
            height={height}
            image={data.data.childImageSharp.fluid}
            alt={'Restaurants'}
        />
    );
};

export default RestaurantsParallax;