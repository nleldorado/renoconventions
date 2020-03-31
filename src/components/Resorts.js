import React from 'react';
import Eldorado from '../images/eldorado.svg'
import Silver from '../images/silver_legacy.svg'
import Circus from '../images/circus_circus.svg'


const Card = ({ image, title, bookTitle, bookUrl, websiteTitle, websiteUrl }) => (
        <div className="content">
        <div className="content-overlay"></div>
        <img className="content-image" src={image} alt="eldorado logo" />
        <div className="content-details fadeIn-bottom">
            <h3 className="content-title">{title}</h3>
            <a href={bookUrl} className="content-text">{bookTitle}</a>
            <a href={websiteUrl} className="content-text">{websiteTitle}</a>
        </div>
    </div>
    )

const Resorts = () => {
    return (
        <div className="resorts">
            <Card 
                image={Eldorado}
                title={"Eldorado"}
                bookTitle={"Book a Room"}
                websiteTitle={"View Website"}
                bookUrl={"/#"}
                websiteUrl={"/#"}
            />
            <Card 
                image={Circus}
                title={"Circus Circus"}
                bookTitle={"Book a Room"}
                websiteTitle={"View Website"}
                bookUrl={"/#"}
                websiteUrl={"/#"}
            />
            <Card 
                image={Silver}
                title={"Silver Legacy"}
                bookTitle={"Book a Room"}
                websiteTitle={"View Website"}
                bookUrl={"/#"}
                websiteUrl={"/#"}
            />
        </div>
    );
};

export default Resorts;