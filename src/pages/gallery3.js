import React, { useState } from "react";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Layout from '../components/layout'
import SEO from '../components/seo'
import GalleryParallax from '../components/GalleryParallax'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery3 = ({ data }) => {
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

    const [isOpen, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const settings = {
        className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
        responsive: [{
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                cssEase: "linear"
            }
          }]
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


                            <Slider {...settings}>
                                {
                                    arr.map((elem, index) => (
                                        <div key={index}>
                                            <button
                                                onClick={() => {
                                                    setSelectedIndex(index);
                                                    setOpen(true);
                                                }}
                                                key={index}
                                            >
                                                <img src={elem.src} alt={elem.alt} />
                                            </button>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </TabPanel>
                        <TabPanel>
                        <ModalGateway>
                                {isOpen ? (
                                    <Modal
                                        onClose={() => {
                                            setOpen(!isOpen);
                                        }}
                                    >
                                        <Carousel
                                            views={recipes}
                                            currentIndex={selectedIndex}
                                            showImageCount={false}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                            <Slider {...settings}>
                                {
                                    recipes.map((elem, index) => (
                                        <div key={index}>
                                            <button
                                                onClick={() => {
                                                    setSelectedIndex(index);
                                                    setOpen(true);
                                                }}
                                                key={index}
                                            >
                                                <img src={elem.src} alt={elem.alt} />
                                            </button>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </TabPanel>
                        <TabPanel>
                        <ModalGateway>
                                {isOpen ? (
                                    <Modal
                                        onClose={() => {
                                            setOpen(!isOpen);
                                        }}
                                    >
                                        <Carousel
                                            views={members}
                                            currentIndex={selectedIndex}
                                            showImageCount={false}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                            <Slider {...settings}>
                                {
                                    members.map((elem, index) => (
                                        <div key={index}>
                                            <button
                                                onClick={() => {
                                                    setSelectedIndex(index);
                                                    setOpen(true);
                                                }}
                                                key={index}
                                            >
                                                <img src={elem.src} alt={elem.alt} />
                                            </button>
                                        </div>
                                    ))
                                }
                            </Slider>
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

export default Gallery3;