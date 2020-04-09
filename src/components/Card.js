import React from 'react';
import PropTypes from "prop-types"

const Card = ({title, subTitle, info, info2}) => {
    return (
        <div className="card">
            <h2>{title}</h2> 
            <h4>{subTitle}</h4>
            <div className="content">
                <p>{info}</p>
                <p>{info2}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    info: PropTypes.string,
    info2: PropTypes.string,
};

export default Card;