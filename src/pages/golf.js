import React from 'react';
import Layout from '../components/layout'
import Gallery from '../components/GalleryModal'
import Parallaxx from '../components/Parallaxx'
import CardFour from '../components/CardFour'
import SEO from '../components/seo'

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
      "https://picsum.photos/200/300"
  },
  {
    src:
      "https://picsum.photos/200/300",
    caption: ""
  },
];

const image="https://picsum.photos/800/800"

const info= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Purus gravida quis blandit turpis cursus in hac habitasse platea. Est ultricies integer quis auctor elit sed vulputate. Cursus in hac habitasse platea. Aliquet risus feugiat in ante metus dictum at. Ullamcorper sit amet risus nullam eget felis eget nunc. Rhoncus urna neque viverra justo. Enim nulla aliquet porttitor lacus luctus. Magna etiam tempor orci eu. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Augue ut lectus arcu bibendum at varius. Et ultrices neque ornare aenean euismod elementum nisi quis. Aliquet risus feugiat in ante metus dictum. Amet venenatis urna cursus eget nunc scelerisque viverra. Pulvinar mattis nunc sed blandit libero. Quam id leo in vitae turpis massa sed elementum. Lacinia at quis risus sed vulputate odio."

const golf = () => {
    return (
        <div>
            <Layout>
              <SEO title="Golf Courses" />
              <Parallaxx 
                  text={'Golf Courses'} 
                  image={'https://images.unsplash.com/photo-1526166881522-d1ede7946450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1350&q=80'} 
                  url={'/golf'}
                  height={'60vh'}
              />
              <CardFour 
                title="Lorem Ipsum"
                info={info}
                image={image}
                alt="Lorem Ipsum"
              />
                <Gallery images={images}/>
                
              <br/>
              <br/>
              <br/>
            </Layout>
        </div>
    );
};

export default golf;