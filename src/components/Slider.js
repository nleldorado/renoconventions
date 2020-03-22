import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const SliderHero = ({content}) => {
    return (
        <div>
            <Slider autoplay={1500} className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderHero;