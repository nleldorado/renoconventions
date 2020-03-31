import React from 'react';
import Layout from '../components/layout'
import Parallaxx from '../components/Parallaxx'
import CardThree from '../components/CardThree'

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
  {
    src:
      "https://picsum.photos/200/300",
    caption: ""
  },
];

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea. Aliquet risus feugiat in ante metus dictum at. Ullamcorper sit amet risus nullam eget felis eget nunc. Rhoncus urna neque viverra justo. Enim nulla aliquet porttitor lacus luctus. Magna etiam tempor orci eu. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Augue ut lectus arcu bibendum at varius. Et ultrices neque ornare aenean euismod elementum nisi quis. Aliquet risus feugiat in ante metus dictum. Amet venenatis urna cursus eget nunc scelerisque viverra. Pulvinar mattis nunc sed blandit libero. Quam id leo in vitae turpis massa sed elementum. Lacinia at quis risus sed vulputate odio."

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

export default sports;