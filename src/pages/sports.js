import React from 'react';
import Layout from '../components/layout'
import CardThree from '../components/CardThree'
import SEO from '../components/seo'
import SportsParallax from '../components/SportsParallax'
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
  {
    src:
      "https://picsum.photos/200/300",
    caption: ""
  },

];

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea. Aliquet risus feugiat in ante metus dictum at. Ullamcorper sit amet risus nullam eget felis eget nunc. Rhoncus urna neque viverra justo. Enim nulla aliquet porttitor lacus luctus. Magna etiam tempor orci eu."

const Sports = () => {
    return (
        <div>
            <Layout>
              <SEO title="Sports" />
              <SportsParallax height="60vh" />
              <Feature 
                image="https://picsum.photos/800/800"
                title="Featured Content"
                content={info}
                url="/"
              />
              <CardThree
                title="Lorem Ipsum"
                info={info}
                images={images}
              />
              <CardThree
                title="Lorem Ipsum"
                info={info}
                images={images}
              />
              <CardThree
                title="Lorem Ipsum"
                info={info}
                images={images}
              />
            </Layout>
        </div>
    );
};

export default Sports;