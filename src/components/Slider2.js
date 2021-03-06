import React from "react";
// JSX
import HeroSlider, { Slide, MenuNav } from "hero-slider";
import Row from '../images/therow.jpg'
import Golf from '../images//resized/golf.jpg'
import Ballroom from '../images/resized/ballroom.jpg'
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

const images = [
    {
        image: Row, 
        title: "Reno Conventions",
        subtitle: "Eldorado / Silver Legacy / Circus Circus",
        link: "/conventions",
    },
    {   
        image: Golf, 
        title: "Golf Venues",
        subtitle: "Description of Slide 2",
        link: "/golf",},
    {        
        image: Ballroom, 
        title: "Meeting Space",
        subtitle: "Description of Slide 3",
        link: "/",}
]

const Screen = () => {
    if (typeof window === 'undefined') 
        return <></>

    return (
        <MenuNav /> 
    )
}

const SliderTwo = () => {
  return (
      <HeroSlider
          slidingAnimation="top_to_bottom"
          orientation="vertical"
          initialSlide={1}
          onBeforeChange={(previousSlide, nextSlide) =>
              console.log("onBeforeChange", previousSlide, nextSlide)
          }
          onChange={nextSlide => console.log("onChange", nextSlide)}
          onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
          style={{
              background: "#222"
          }}
          settings={{
              slidingDuration: 400,
              slidingDelay: 100,
              shouldAutoplay: true,
              shouldDisplayButtons: false,
              autoplayDuration: 8000,
              height: "100vh"
          }}
      >
          {
              images.map((image, index) => (
                  <Slide
                      navDescription={image.title}
                      background={{
                          backgroundColor: "#222",
                          backgroundImage: image.image,

                      }}
                  >
                      <div className="slider-text" style={{
                          background: `linear-gradient(
                            rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))`,
                          height: `100vh`
                      }}>
                          <Fade down>
                              <h1>{image.title}</h1>
                          </Fade>
                          <Fade cascade>
                              <p>{image.subtitle}</p>
                          </Fade>
                          <Fade up>
                              <Link to={image.link}>Learn More</Link>
                          </Fade>
                      </div>
                  </Slide>
              ))
          }

          <Screen />
      </HeroSlider>
  );
};

export default SliderTwo;