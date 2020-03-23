import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import Parallaxx from '../components/Parallaxx'

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

const golf = () => {
    return (
        <div>
            <Layout>
              <Parallaxx 
                  text={'Golf Courses'} 
                  image={'https://images.unsplash.com/photo-1535132011086-b8818f016104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'} 
                  url={'/golf'}
                  height={'60vh'}
              />
                <Gallery images={images}/>
            </Layout>
        </div>
    );
};

export default golf;