import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
// import Collapsible from '../components/Collapsible'
import SEO from '../components/seo'
import AttractionsParallax from '../components/AttractionsParallax'
import Feature from '../components/Feature'
import AttractionsList from '../components/AttractionsList'

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

// const items = [
//   {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
//   {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
//   {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
//   {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
//   {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
//   {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."},
//   {button: "Lorem ipsum", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea."}
// ]

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea. Aliquet risus feugiat in ante metus dictum at. Ullamcorper sit amet risus nullam eget felis eget nunc. Rhoncus urna neque viverra justo. Enim nulla aliquet porttitor lacus luctus. Magna etiam tempor orci eu."


const Attractions = () => {
    return (
        <div>
            <Layout>
              <SEO title="Nearby Attractions" />
              <AttractionsParallax height="60vh" imgHeight="100vh" />  
              <Feature 
                image="https://picsum.photos/800/800"
                title="Featured Content"
                content={info}
                url="/"
              />
              <AttractionsList />
              {/* <Collapsible 
                  items={items}
              /> */}
              <Gallery images={images} />
            </Layout>
        </div>
    );
};

export default Attractions;