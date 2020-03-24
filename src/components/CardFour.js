import React from 'react';

const CardFour = ({title, info, image, alt}) => {
    return (
        <div className="card-four">
            <div className="card-info">
                <h2>{title}</h2>
                <p>{info}</p>
            </div>
            <div className="card-image">
                <img src={image} className="image" alt={alt} />
            </div>
        </div>
    );
};

export default CardFour;