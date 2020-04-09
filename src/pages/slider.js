import React from "react";
// JSX
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Layout from '../components/layout'
import Resorts from '../components/AboutResorts'
import Sports from '../images/baseball.jpeg'

// Images
const kyoto = "https://i.imgur.com/xw5Abku.jpg";
const tenryuJiTemple = "https://i.imgur.com/g5JNdYL.jpg";
// const hakone = "https://i.imgur.com/Iq6XtFR.jpg";
const byodoInTemple = "https://i.imgur.com/le9OeEC.jpg";

const Slider = () => {
  return (
    <Layout>
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
        backgroundColor: "#000"
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
 

      <Slide
        shouldRenderMask
        navDescription="Reno Conventions"
        background={{
          backgroundColor: "#6D9B98",
          backgroundImage: Sports,
          
        }}
      >
     <div className="slider-text" style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))`,
            height: `100vh`
    }}>
         <h1>RENO CONVENTIONS</h1>
         <p>ELDORADO / CIRCUS CIRCUS / SILVER LEGACY</p>
         </div>
      </Slide>

      <Slide
        shouldRenderMask
        navDescription="Tenryu-ji Temple - KyÅto-shi - Japan"
        background={{
          backgroundColor: "#8A8A8A",
   
          backgroundImage: tenryuJiTemple
        }}
        >
        <div className="slider-text" style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))`,
            height: `100vh`
    }}>
         <h1>Title Slide 2</h1>
         <p>Description of Slide 2</p>
         </div>
        </Slide>

      <Slide
        shouldRenderMask
        navDescription="Byodo-In Temple - Kaneohe - United States"
        background={{
          backgroundColor: "#2D7791",
       
          backgroundImage: byodoInTemple
        }}
      >
      <div className="slider-text" style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))`,
            height: `100vh`
    }}>
         <h1>Title Slide 3</h1>
         <p>Description of Title Slide 3</p>
         </div>

      </Slide>

      <MenuNav />
    </HeroSlider>
    <Resorts/>
    </Layout>
  );
};

export default Slider;