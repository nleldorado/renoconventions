import React, { useState } from "react";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Carousel, { Modal, ModalGateway } from "react-images";
import Layout from '../components/layout'
import SEO from '../components/seo'
import GalleryParallax from '../components/GalleryParallax'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const GalleryPage = ({ data }) => {
    let arr = []
    let recipes = []
    let members = []
    let allImages = [arr, recipes, members]

    const images = data.allMediaImage.nodes
    const recipeImages = data.allNodeRecipe.nodes
    const memberImages = data.allNodeTeamMember.nodes

    images.forEach(image => {
        arr.push({
            "src": image.relationships.field_media_image.localFile.publicURL,
            "alt": image.name,
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


    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    // second slide
  


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
        responsive: [{
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    };

    return (
        <Layout>
            <SEO title="Gallery" />
            <GalleryParallax height="60vh" />
            <div className="container">
            <div className="gallery-wrapper">
                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        |
                        <Tab>Conventions</Tab>
                        |
                        <Tab>Sports</Tab>
                        |
                        <Tab>Golf</Tab>
                        |
                        <Tab>Attractions</Tab>
                        |
                        <Tab>Restaurants</Tab>
                        |
                        <Tab>Team Members</Tab>
                    </TabList>
                {
                    allImages.map(arr => {
                        return (
                        <TabPanel>
                <div className="slick-gallery">
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
                        <div className="wrapper">
                            <div className="main-image">
                                <Slider asNavFor={nav2} ref={slider1 => setNav1(slider1)}>
                                    {
                                        arr.map((image, index) => (
                                            <div className="image-wrapper">
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
                                                            padding: "0 !important",
                                                            objectFit: "cover",
                                                            objectPosition: "center"
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                            <div className="thumbnails">
                            <Slider asNavFor={nav1}
                                ref={slider2 => setNav2(slider2)}
                                slidesToShow={3}
                                swipeToSlide={true}

                                focusOnSelect={true}
                                {...settings}>
                                {
                                    arr.map((image, index) => (
                                        <div>
                                            <button
                                                key={index}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.name}
                                                    key={index}
                                                    style={{
                                                        padding: "0",
                                                        objectFit: "cover",
                                                        objectPosition: "center"
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    ))
                                }
                            </Slider>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </TabPanel>
                        )
                    })
                }
                </Tabs>
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

export default GalleryPage