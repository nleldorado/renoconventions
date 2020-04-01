import React from "react"

import Layout from "../components/layout"
import Slider from "../components/Slider"
import AboutResorts from "../components/AboutResorts"
import SportsHome from '../components/SportsHome'
import ConventionsHome from '../components/ConventionsHome'
import GolfHome from '../components/GolfHome'
import AttractionsHome from '../components/AttractionsHome'
import RestaurantsHome from '../components/RestaurantsHome'
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <AboutResorts/>
    <ConventionsHome/>
    <SportsHome/>
    <GolfHome/>
    <AttractionsHome/>
    <RestaurantsHome/>
  </Layout>
)

export default IndexPage
