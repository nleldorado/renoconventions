import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel, { Modal, ModalGateway } from "react-images";

// const images = [
//   {
//     src:
//       "https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
//     caption: "man riding bike.jpg"
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
//     caption: "laptop.png"
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1558980394-a3099ed53abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
//     caption: "man riding bike.jpg"
//   },
//   {
//     src:
//       "https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
//     caption: "laptop.png"
//   },
// ];

 
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