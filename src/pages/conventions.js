import React from 'react';
import Layout from '../components/layout'
import CardOne from '../components/CardOne'
import CardTwo from '../components/CardTwo'
import SEO from '../components/seo'
import ConventionsParallax from '../components/ConventionsParallax'
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

const Conventions = () => {
    return (
        <div>
            <Layout>
              <SEO title="Conventions"/>
              <ConventionsParallax height="60vh" imgHeight="100vh"/>
              <Feature 
                image="https://picsum.photos/800/800"
                title="Featured Content"
                content="Plan your event in the heart of Downtown Reno, a destination encompassing six city blocks of electrifying atmosphere composed of restaurants, casinos, shops, gracious accommodations and ample meeting space yours for the taking. Suitable for Reno conferences and group functions, we offer 5 sophisticated venues for groups of all sizes and types at a great value. Whether you are planning a business banquet or an elegant Reno special event, we have the space and the staff to cater to your event."
                url="/"
              />
                <CardOne 
                  title="Eldorado Convention Center"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardTwo 
                  title="Eldorado Panoramic Boardroom"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardOne 
                  title="Eldorado Showroom"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardTwo 
                  title="Circus Circus Convention Center"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardOne 
                  title="Circus Circus Skytower Conference Rooms"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardTwo 
                  title="Silver Legacy Grand Exposition Hall"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardOne 
                  title="Silver Legacy Baron Rooms"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardTwo 
                  title="Reno Ballrooms"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                <CardOne 
                  title="Reno Events Center"
                  info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  images={images}
                />
                {/* <Gallery images={images}/> */}
            </Layout>
        </div>
    );
};

export default Conventions;