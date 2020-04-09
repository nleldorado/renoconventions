import React from 'react';

const list = [
    'Reno Events Center',
    'Reno Aces AAA Baseball Stadium',
    'Reno Bighorns NBA Development Team',
    'Reno Bighorns NBA Development Team',
    'Downtown Riverwalk',
    'National Bowling Stadium',
    'National Automobile Museum',
    'Nevada Art Museum',
    'Unique Dining and Nightlife Options',
]

const AttractionsList = () => {
    return (
        <div className="container">
            <div className="attractions">
              <h2>TOP ATTRACTIONS NEARBY</h2>
              <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }     
                </ul>       
            </div>
        </div>
    );
};

export default AttractionsList;