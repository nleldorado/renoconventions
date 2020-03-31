import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Img from 'gatsy-image'

const ReactModal = ({images}) => {
    const [isOpen, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
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
                views={images.relationships.field_media_image.localFile.childImageSharp.fluid}
                currentIndex={selectedIndex}
                showImageCount={false}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <div>
          {images.relationships.field_media_image.localFile.childImageSharp.fluid.map(({ src }, index) => (
              <button
                onClick={() => {
                  setSelectedIndex(index);
                  setOpen(true);
                }}
                key={index}
              >

            <Img
              fluid={src}
              alt={index}
         
            />
            </button>
          ))}
        </div>
        </div>
      </div>
    );
};

export default ReactModal;