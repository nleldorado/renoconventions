import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Brew from '../images/restaurants/brewbrothers.png'
import Buffet from '../images/restaurants/buffet.png'
import Habit from '../images/restaurants/habit.png'
import Lastrada from '../images/restaurants/lastrada.png'
import Panda from '../images/restaurants/panda.png'
import Pearl from '../images/restaurants/pearl.png'
import Pho from '../images/restaurants/pho.png'
import Pizza from '../images/restaurants/pizza.png'
import Roxy from '../images/restaurants/roxy.png'
import Steak from '../images/restaurants/steak.png'
import Sake from '../images/restaurants/sushisake.png'
import Canters from '../images/restaurants/canters.png'
import Jefe from '../images/restaurants/jefe.png'
import Kanpai from '../images/restaurants/kanpai.png'
import Pie from '../images/restaurants/pie.png'
import Millies from '../images/restaurants/millies.png'


let restaurants = [
    ["Eldorado Buffet",  Buffet],
    ["The Brew brothers", Brew],
    ["Pearl Oyster Bar and Grill", Pearl],
    ["El Jefes", Jefe],
    ["The Habit", Habit],
    ["Kanpai Sushi", Kanpai],
    ["Sushi Sake", Sake],
    ["Pho Mien", Pho],
    ["Piezzietta", Pie],
    ["Hidden Pizza", Pizza],
    ["Panda Express", Panda],
    ["Canters", Canters],
    ["Millies", Millies],
    ["La Strada", Lastrada],
    ["Ruth's Chris Steak House", Steak],
    ["Roxy", Roxy]
]


const Slick = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [{
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                speed: 3000,
                autoplaySpeed: 3000,
                cssEase: "linear"
            }
          }]
      };
    return (
        <div className="slick">
            <div className="container">
                <h1>Over 17 restaurants to choose from.</h1>
                <Slider {...settings}>
                    {
                        restaurants.map((restaurant, index) => (
                            <div key={index}>
                                {/* <h3>
                                {restaurant[0]}
                            </h3> */}
                                <img src={restaurant[1]} alt="restaurant" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Slick;