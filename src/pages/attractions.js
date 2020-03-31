import React from 'react';
import Layout from '../components/layout'
import GalleryModal from '../components/GalleryModal'
import Parallaxx from '../components/Parallaxx'
import Collapsable from '../components/Collapsable'

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

const items = [
  {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
  {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
  {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
  {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
  {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
  {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
  {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."}
]

const attractions = () => {
    return (
        <div>
            <Layout>
              <Parallaxx 
                  text={'Nearby Attractions'} 
                  image={'https://sgl-assets.imgix.net/files/article_hero/truckee-river-reno-riverwalk-fall-via-magazine.jpg?w=1440&h=720&crop=faces,edges'} 
                  url={'/attractions'}
                  height={'60vh'}
              />
              <Collapsable 
                  items={items}
              />
              <GalleryModal images={images} />
            </Layout>
        </div>
    );
};

export default attractions;