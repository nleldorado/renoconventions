import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import SEO from '../components/seo'
import RestaurantsParallax from '../components/RestaurantsParallax'
import Feature from '../components/Feature'

const images = [
  {
    src:
      "https://picsum.photos/200/300",
      caption: ""
  },
  {
    src:
      "https://picsum.photos/200/300",
      caption: ""
  },
  {
    src:
      "https://picsum.photos/200/300"
  },
  {
    src:
      "https://picsum.photos/200/300",
    caption: ""
  },
];

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea. Aliquet risus feugiat in ante metus dictum at. Ullamcorper sit amet risus nullam eget felis eget nunc. Rhoncus urna neque viverra justo. Enim nulla aliquet porttitor lacus luctus. Magna etiam tempor orci eu."

const Restaurants = () => {
    return (
      
        <div>
            <Layout>
              <SEO title="Restaurants" />
              <RestaurantsParallax height="60vh" imgHeight="100vh" />
              <Feature 
                image="https://picsum.photos/800/800"
                title="Featured Content"
                content={info}
                url="/"
              />
                <Gallery images={images}/>
            </Layout>
        </div>
    );
};

export default Restaurants;