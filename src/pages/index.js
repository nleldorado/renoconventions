import React from "react"
import Layout from "../components/layout"
import Slider from "../components/Slider"
import Slider2 from "../components/Slider2"
import AboutResorts from "../components/AboutResorts"
import SportsParallax from '../components/SportsParallax'
import ConventionsParallax from '../components/ConventionsParallax'
import GolfParallax from '../components/GolfParallax'
import AttractionsParallax from '../components/AttractionsParallax'
import RestaurantsParallax from '../components/RestaurantsParallax'
import Slick from "../components/Slick"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider2 />
    <AboutResorts/>
    <ConventionsParallax url="/conventions" height="100vh" />
    <SportsParallax url="/sports" height="100vh" />
    <GolfParallax  url="/golf" height="100vh" />
    <AttractionsParallax url="/attractions" height="100vh" />
    <RestaurantsParallax url="/restaurants" height="100vh" />
    <Slick/>
  </Layout>
)

export default IndexPage
