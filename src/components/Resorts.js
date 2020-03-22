import React from 'react';
import Eldorado from '../images/eldorado.svg'
import Silver from '../images/silver_legacy.svg'
import Circus from '../images/circus_circus.svg'

const Resorts = () => {
    return (
        <div className="resorts">
            <div class="content">
                <div className="content-overlay"></div>
                    <img className="content-image" src={Eldorado} />
                    <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Eldorado</h3>
                    <a href="/" className="content-text">Book a Room</a>
                    <a href="/" className="content-text">View Website</a>
                </div>
            </div>
            <div class="content circus">
                <div className="content-overlay"></div>
                    <img className="content-image" src={Circus} />
                    <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Circus Circus</h3>
                    <a href="/" className="content-text">Book a Room</a>
                    <a href="/" className="content-text">View Website</a>
                </div>
            </div>
            <div class="content silver">
                <div className="content-overlay"></div>
                    <img className="content-image" src={Silver} />
                    <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">Silver Legacy</h3>
                    <a href="/" className="content-text">Book a Room</a>
                    <a href="/" className="content-text">View Website</a>
                </div>
            </div>
        </div>
    );
};

export default Resorts;