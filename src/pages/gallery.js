import React, { useState } from "react";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from "react-images";
import Layout from '../components/layout'
import SEO from '../components/seo'
import Parallaxx from '../components/Parallaxx'

const GalleryPage = ({ data }) => {
    let arr = []
    const images = data.allMediaImage.nodes;    

    images.forEach(image => {
        arr.push({"src" : image.relationships.field_media_image.localFile.publicURL,
                  "alt" : image.name
                })
    })
      
    const [isOpen, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Layout>
            <SEO title="Gallery" />
            <Parallaxx 
                  text={'Gallery'}
                  image="https://images.unsplash.com/photo-1526930795887-9ff8eb71f13f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
                  url={'/gallery'}
                  height={'60vh'}
              />

            <div className="gallery">
                <div className="image-gallery">
                    <ModalGateway>
                        {isOpen ? (
                            <Modal
                            onClose={() => {
                                setOpen(!isOpen);
                            }}
                            >
                            <Carousel
                                views={arr}
                                currentIndex={selectedIndex}
                                showImageCount={false}
                            />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                <div>
                    {
                        arr.map((image, index) => (
                            <button
                                onClick={() => {
                                setSelectedIndex(index);
                                setOpen(true);
                                }}
                                key={index}
                            >
                                <img
                                    src={image.src}
                                    alt={image.name}
                                    key={index}
                                    style={{
                                        padding: "0 4px",
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                    />
                            </button>
                        ))
                    }
                    </div>
                </div>
            </div>
 
   
        </Layout>
    )
}

GalleryPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    allMediaImage {
      nodes {
        name
        relationships {
          field_media_image {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default GalleryPage