import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Fade from 'react-reveal/Fade';

const SliderHero = ({content}) => {
    return (
        <div>
            <Slider autoplay={3000} className="slider-wrapper">
                {content.map((item, index) => (
                   
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                     {/* <video src={item.video} mute="true" autoplay="true" type="video/mp4" /> */}
                        <div className="inner">
                       
                            <h1><Fade top>{item.title}</Fade></h1>
                            <p>{item.description}</p>
                            <button><Fade>{item.button}</Fade></button>  
                        </div>
                    </div>
                   
                ))}
            </Slider>
        </div>
    );
};

export default SliderHero;