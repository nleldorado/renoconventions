import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const TeamCard = ({name, position, number, image, alt}) => {
    return (
        <div className="team-card">
            <div className="image-wrapper">
                <Img className="member-image" fixed={image} alt={alt} />
            </div>
            <div className="card-bottom">
                <h4>{name}</h4>
            <p>{position}</p>
            <p>{number}</p>
            </div>
        </div>
    );
};

TeamCard.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    // path: PropTypes.string.isRequired,
};

export default TeamCard;