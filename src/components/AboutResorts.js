import React from 'react';
import Resort from './Resorts'
import CountIntersectionObserver from './CountIntersectionObserver'
import Video from './Video'
import {Link} from 'gatsby'

const Resorts = () => {
    return (
        <>
        <div className="about-resorts">
            <div className="col-6 col-s-12">
                <h2>
                Three distinct resorts. 
                <br/>
                One amazing experience.
                </h2>
                <p>
                Known as “The City Within a City,” THE ROW is Reno’s ultimate destination. Our three seamlessly connected resorts—Silver Legacy Resort Casino, Eldorado Resort Casino and Circus Circus Hotel Casino—welcome the opportunity to be your next meeting destination. Located only ten minutes from the Reno-Tahoe International Airport in the heart of Reno, THE ROW features Reno’s most diverse entertainment, shopping and dining options—both on and off property.
                </p>
                <Link to="/about">Learn More</Link>
            </div>
            <div className="col-6 col-s-12 display-flex">
                <Video 
                    id='cZ-eR8xVBoU'
                    channel='youtube'
                />
            </div>
        </div>
        <CountIntersectionObserver/>
        <Resort/> 
        
        </>
    );
};

export default Resorts;