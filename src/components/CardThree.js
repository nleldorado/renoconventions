import React from 'react';
import GalleryModal from './GalleryModal'

const CardThree = ({title, info, info2, images}) => {
    return (
        <div className="card-three">
            <div className="card-info">
                <h2>{title}</h2>
                <p>{info}</p>
                <p>{info2}</p>
            </div>
            <div className="photos">
                <GalleryModal images={images} />
            </div>
        </div>
    );
};

export default CardThree;