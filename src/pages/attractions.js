import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    caption: "man riding bike.jpg"
  },
  {
    src:
      "https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
    caption: "laptop.png"
  },
  {
    src:
      "https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    caption: "man riding bike.jpg"
  },
  {
    src:
      "https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
    caption: "laptop.png"
  },
];

const attractions = () => {
    return (
        <div>
            <Layout>
                <Gallery images={images} />
            </Layout>
        </div>
    );
};

export default attractions;