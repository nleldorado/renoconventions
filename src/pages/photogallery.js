import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import { photos } from "../components/photos";

const PhotoGallery = ({ data }) => {
    let arr = []
    const images = data.allMediaImage.nodes;

    images.forEach(image => {
        arr.push({
            "src": image.relationships.field_media_image.localFile.publicURL,
            "width" : Math.floor(Math.random() * 4) + 2,
            "height" : Math.floor(Math.random() * 4) + 2,
            "alt": image.name
        })
    })
    
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
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
    );
};

PhotoGallery.propTypes = {
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

export default PhotoGallery;