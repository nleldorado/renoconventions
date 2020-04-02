import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Fade from 'react-reveal/Fade';

import BackgroundImage from 'gatsby-background-image'

const SliderHero = ({className}) => {
  const {
    baseball,
    chairs,
    golf,
    } = useStaticQuery(
        graphql`
        query {
            baseball: file(relativePath: { eq: "baseball.jpeg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }   
            }
            }
            chairs: file(relativePath: { eq: "chairs.jpeg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
                }
            }
            golf: file(relativePath: { eq: "golf.jpeg" }) {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
                }
            }
    }
    `
  )

    const backgroundOne = [
        `linear-gradient(
            rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.0))`, baseball.childImageSharp.fluid,
    ]
    const backgroundTwo = [
        `linear-gradient(
            rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))`, chairs.childImageSharp.fluid,
    ]
    const backgroundThree = [
        `linear-gradient(
            rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))`, golf.childImageSharp.fluid,
    ]

    const slides = [
        {title: 'Reno Conventions', description: 'Eldorado / Circus Circus / Silver Legacy', button: 'READ MORE', image: backgroundOne},
        {title: 'Title Slide 2', description: 'Description of slide 2', button: 'READ MORE', image: backgroundTwo},
        {title: 'Title Slide 3', description: 'Description of slide 3', button: 'READ MORE', image: backgroundThree},
    ]

  return (
    <Slider autoplay={3000} className="slider-wrapper">
     {slides.map((item, index) => (
         <div className="slider-content"
            key={index}>
            <BackgroundImage    
                className="slider-content"
                id={`test`}
                key={index}
                fluid={item.image}
                fadeIn={false}
                // durationFadeIn="100ms"
                backgroundColor="white"
            >
                <div className="inner">
                    <h1><Fade top>{item.title}</Fade></h1>
                    <p>{item.description}</p>
                    <button><Fade>{item.button}</Fade></button>  
                </div>
            </BackgroundImage>
            </div>
     ))}
    </Slider>
  )
}


export default SliderHero