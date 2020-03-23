import React from 'react';
import Gallery from './Gallery'


const CardOne = ({title, info, info2, images}) => {
    return (
        <div className="card-one">
            <div className="card-info">
                <h2>{title}</h2>
                <p>{info}</p>
                <p>{info2}</p>
            </div>
            <div className="photos">
                <Gallery images={images} />
            </div>
        </div>
    );
};

export default CardOne;