import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import RestaurantImage from '../images/restaurants.jpg'
import SEO from '../components/seo'
import RestaurantsParallax from '../components/RestaurantsParallax'

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

const Restaurants = () => {
    return (
      
        <div>
            <Layout>
              <SEO title="Restaurants" />
              <RestaurantsParallax height="60vh" />
                <Gallery images={images}/>
            </Layout>
        </div>
    );
};

export default Restaurants;