import React from 'react';

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

export default Card;