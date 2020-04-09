import React from 'react';
import Gallery from './Gallery'
import PropTypes from "prop-types"

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

CardOne.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    info2: PropTypes.string,
    images: PropTypes.array,
};

export default CardOne;