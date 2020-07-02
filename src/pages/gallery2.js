import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Layout from '../components/layout'
import SEO from '../components/seo'
import GalleryParallax from '../components/GalleryParallax'

const Gallery2 = ({ data }) => {
    let arr = []
    let recipes = []
    let members = []

    const images = data.allMediaImage.nodes
    const recipeImages = data.allNodeRecipe.nodes
    const memberImages = data.allNodeTeamMember.nodes

    images.forEach(image => {
        arr.push({
            "src": image.relationships.field_media_image.localFile.publicURL,
            "width" : 100,
            "height" : 80,
            "alt": image.name
        })
    })
    recipeImages.forEach(recipe => {
        recipes.push({
            "src": recipe.relationships.field_media_image.relationships.field_media_image.localFile.publicURL,
            "width" : 100,
            "height" : 80,
            "alt": recipe.name
        })
    })
    memberImages.forEach(member => {
        members.push({
            "src": member.relationships.field_media_image.relationships.field_media_image.localFile.publicURL,
            "width" : 100,
            "height" : 80,
            "alt": member.name
        })
    })
    
    const [currentImage, setCurrentImage] = useState(0);
    const [currentImage2, setCurrentImage2] = useState(0);
    const [currentImage3, setCurrentImage3] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [viewerIsOpen2, setViewerIsOpen2] = useState(false);
    const [viewerIsOpen3, setViewerIsOpen3] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const openLightbox2 = useCallback((event, { photo, index }) => {
        setCurrentImage2(index);
        setViewerIsOpen2(true);
    }, []);
    const openLightbox3= useCallback((event, { photo, index }) => {
        setCurrentImage3(index);
        setViewerIsOpen3(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const closeLightbox2 = () => {
        setCurrentImage2(0);
        setViewerIsOpen2(false);
    };
    const closeLightbox3 = () => {
        setCurrentImage3(0);
        setViewerIsOpen3(false);
    };


    return (
        <>
        <Layout>
            <SEO title="Gallery" />
            <GalleryParallax height="60vh" />
            <div className="gallery-wrapper">
        <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Recipes</Tab>
      <Tab>Team Members</Tab>
    </TabList>
 
    <TabPanel>
    <div>
            <Gallery photos={arr} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={arr.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    </TabPanel>
    <TabPanel>
    <div>
            <Gallery photos={recipes} onClick={openLightbox3} />
            <ModalGateway>
                {viewerIsOpen3 ? (
                <Modal onClose={closeLightbox3}>
                    <Carousel
                    currentIndex={currentImage3}
                    views={recipes.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    </TabPanel>
    <TabPanel>
    <div>
            <Gallery photos={members} onClick={openLightbox2} />
            <ModalGateway>
                {viewerIsOpen2 ? (
                <Modal onClose={closeLightbox2}>
                    <Carousel
                    currentIndex={currentImage2}
                    views={members.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    </TabPanel>
  </Tabs>
</div>
    </Layout>
        </>
    );
};

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
    allNodeRecipe {
        nodes {
          relationships {
            field_media_image {
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
      }
    allNodeTeamMember {
        nodes {
          relationships {
            field_media_image {
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
    }
  }
`

export default Gallery2;