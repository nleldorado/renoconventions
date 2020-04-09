import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from "prop-types"

const GalleryModal = ({images}) => {
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
                views={images}
                currentIndex={selectedIndex}
                showImageCount={false}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <div>
          {images.map(({ src }, index) => (
              <button
                onClick={() => {
                  setSelectedIndex(index);
                  setOpen(true);
                }}
                key={index}
              >

            <img
              src={src}
              alt={index}
              key={index}
              style={{
                padding: "0 4px",
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
            </button>
          ))}
        </div>
        </div>
      </div>
    );
};

GalleryModal.propTypes = {
  images: PropTypes.array,
};

export default GalleryModal;