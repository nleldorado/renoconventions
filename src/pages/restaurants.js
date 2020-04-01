import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/GalleryModal'
import Parallaxx from '../components/Parallaxx'
import RestaurantImage from '../images/restaurants.jpg'
import SEO from '../components/seo'

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

const restaurants = () => {
    return (
        <div>
            <Layout>
              <SEO title="Restaurants" />
              <Parallaxx 
                  text={'Restaurants'}
                  image="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  url={'/restaurants'}
                  height={'60vh'}
              /> 
                <Gallery images={images}/>
            </Layout>
        </div>
    );
};

export default restaurants;