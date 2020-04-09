import React from "react";
// JSX
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Sports from '../images/baseball.jpeg'
import Golf from '../images/golf.jpeg'
import Chairs from '../images/chairs.jpeg'
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

const images = [
    {
        image: Sports, 
        title: "Reno Conventions",
        subtitle: "Eldorado / Circus Circus / Silver Legacy",
        link: "/conventions",
    },
    {   
        image: Golf, 
        title: "Slide Two",
        subtitle: "Description of Slide 2",
        link: "/",},
    {        
        image: Chairs, 
        title: "Slide Three",
        subtitle: "Description of Slide 2",
        link: "/",}
]

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
                    navDescription = {image.title}
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
 
      {/* <Slide
        navDescription="Reno Conventions"
        background={{
          backgroundColor: "#6D9B98",
          backgroundImage: Sports,
          
        }}
      >
     <div className="slider-text" style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))`,
            height: `100vh`
    }}>
    <Fade down>
         <h1>RENO CONVENTIONS</h1>
         </Fade>
         <Fade cascade>
         <p>ELDORADO / CIRCUS CIRCUS / SILVER LEGACY</p>
         </Fade>
         <Fade up>
         <Link to="/">Learn More</Link> 
         </Fade>
         </div>
      </Slide>

      <Slide
        navDescription="Slider 2 Description"
        background={{
          backgroundColor: "#8A8A8A",
   
          backgroundImage: Golf
        }}
        >
        <div className="slider-text" style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))`,
            height: `100vh`
    }}>
    <Fade down>
         <h1>Title Slide 2</h1>
         </Fade>
         <p>Description of Slide 2</p>
         <Fade up>
         <Link to="/">Learn More</Link> 
         </Fade>
         </div>
        </Slide>

      <Slide
        navDescription="Slider 3 Description"
        background={{
          backgroundColor: "#2D7791",
       
          backgroundImage: Chairs
        }}
      >
      <div className="slider-text" style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))`,
            height: `100vh`
    }}>
    <Fade up>
         <h1>Title Slide 3</h1>
         </Fade>
         <p>Description of Title Slide 3</p>
         <Fade up>
         <Link to="/">Learn More</Link> 
         </Fade>
         </div>

      </Slide> */}

      <MenuNav />
    </HeroSlider>
  );
};

export default SliderTwo;