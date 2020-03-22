import React from 'react';
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

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

const conventions = () => {
    return (
        <div>
            <Layout>
                <Gallery images={images}/>
            </Layout>
        </div>
    );
};

export default conventions;