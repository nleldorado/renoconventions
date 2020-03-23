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

const sports = () => {
    return (
        <div>
            <Layout>
              <Parallaxx 
                  text={'Sports'}
                  image={'https://i.pinimg.com/originals/b0/56/f2/b056f2c2f37a44bb3268d81cd1f3d1e0.jpg'}
                  url={'/sports'}
                  height={'60vh'}
              />
                <Gallery images={images}/>
            </Layout>
        </div>
    );
};

export default sports;