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

const content = [
  {
    title: "Reno Conventions",
    description:
      "Eldorado / Circus Circus / Silver Legacy",
    button: "Read More",
    // video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    // video: "https://nrsplus.com/ext/hero-banner-EDITED.mp4"
    image: "https://unite.unity.com/themes/unite/images/2018/losangeles/whatson.jpg"
  },
  {
      title: "Title Slide 2",
      description:
        "Description of slide 2",
      button: "Read More",
      image: "https://images.unsplash.com/photo-1526166729864-ddc57657d48f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
    },
  {
      title: "Title Slide 3",
      description:
        "Description of slide 3",
      button: "Read More",
      image: "https://www.connectmeetings.com/sites/connect/meetings/files/DT_REno_1920x1080.jpeg"
    }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider content={content} />
    <AboutResorts/>
    <ConventionsHome/>
    <SportsHome/>
    <GolfHome/>
    <AttractionsHome/>
    <RestaurantsHome/>
  </Layout>
)

export default IndexPage
