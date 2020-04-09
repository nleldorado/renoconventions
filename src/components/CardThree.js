import React from 'react';
import Gallery from './Gallery'
import PropTypes from "prop-types"

const CardThree = ({title, info, info2, images}) => {
    return (
        <div className="card-three">
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

CardThree.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    info2: PropTypes.string,
    images: PropTypes.array,  
};

export default CardThree;