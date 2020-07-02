import React from 'react';
import PropTypes from "prop-types"

const Card = ({title, subtitle, info, info2}) => {
    return (
        <div className="card">
            <h2>{title}</h2> 
            <h4>{subtitle}</h4>
            <div className="content">
                <p>{info}</p>
                <p>{info2}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    info: PropTypes.string,
    info2: PropTypes.string,
};

export default Card;