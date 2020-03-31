import React from 'react';
import { Parallax, Background } from 'react-parallax';
import RestaurantImage from '../images/restaurants.jpg'
import Slick from '../components/Slick'
import Parallaxx from './Parallaxx'

const Restaurants = () => {
    return (
        <div>
            <Parallaxx 
                text={'Restaurants'}
                image={RestaurantImage}
                url={'/restaurants'}
            /> 
        <Slick/>
        </div>
    );
};

export default Restaurants;