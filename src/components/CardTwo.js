import React from 'react';
import Gallery from './Gallery'
import PropTypes from "prop-types"

const CardTwo = ({title, info, info2, images}) => {
    return (
        <div className="card-two">
            <div className="photos">
                <Gallery images={images} />
            </div>
            <div className="card-info">
                <h2>{title}</h2>
                <p>{info}</p>
                <p>{info2}</p>
            </div>
        </div>
    );
};

CardTwo.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    info2: PropTypes.string,
    images: PropTypes.array,  
};

export default CardTwo;