import React from 'react';
import GalleryModal from './GalleryModal'


const CardTwo = ({title, info, info2, images}) => {
    return (
        <div className="card-two">
            <div className="photos">
                <GalleryModal images={images} />
            </div>
            <div className="card-info">
                <h2>{title}</h2>
                <p>{info}</p>
                <p>{info2}</p>
            </div>
        </div>
    );
};

export default CardTwo;