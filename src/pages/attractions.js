import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import Collapsable from '../components/Collapsable'
import SEO from '../components/seo'
import AttractionsParallax from '../components/AttractionsParallax'

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

const Attractions = () => {
    return (
        <div>
            <Layout>
              <SEO title="Nearby Attractions" />
              <AttractionsParallax height="60vh" />
              <div className="attractions">
              <h2>TOP ATTRACTIONS NEARBY</h2>
              <br/>
              <p>When not reveling in the entertainment offered right onsite in the form of gaming, nightlife and shows at great value, check out the exciting attractions nearby.
              </p>
              <br/>
              <p>Reno Events Center</p>
              <p>Reno Aces AAA Baseball Stadium</p>
              <p>Reno Bighorns NBA Development Team</p>
              <p>Downtown Riverwalk</p>
              <p>National Bowling Stadium</p>
              <p>National Automobile Museum</p>
              <p>Nevada Art Museum</p>
              <p>Unique Dining and Nightlife Options</p>
              <p>Blocks from the University of Nevada</p>
              </div>
              <Collapsable 
                  items={items}
              />
              <Gallery images={images} />
            </Layout>
        </div>
    );
};

export default Attractions;