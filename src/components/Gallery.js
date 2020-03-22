import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery = ({images}) => {
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
            <img
              onClick={() => {
                setSelectedIndex(index);
                setOpen(true);
              }}
              src={src}
              alt=""
              style={{
                width: "250px",
                height: "130px",
                padding: "10px",
                borderRadius: "20px",
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          ))}
        </div>
        </div>
      </div>
    );
};

export default Gallery;