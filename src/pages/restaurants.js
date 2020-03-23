import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import Parallaxx from '../components/Parallaxx'
import RestaurantImage from '../images/restaurants.jpg'

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
              <Parallaxx 
                  text={'Restaurants'}
                  image={RestaurantImage}
                  url={'/restaurants'}
                  height={'60vh'}
              /> 
                <Gallery images={images}/>
            </Layout>
        </div>
    );
};

export default restaurants;