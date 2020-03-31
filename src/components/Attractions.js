import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Parallaxx from './Parallaxx'

const Attractions = () => {
    return (
        <div>
            <Parallaxx 
                text={'Nearby Attractions'} 
                image={'https://sgl-assets.imgix.net/files/article_hero/truckee-river-reno-riverwalk-fall-via-magazine.jpg?w=1440&h=720&crop=faces,edges'} 
                url={'/attractions'}
            />
        </div>
    );
};

export default Attractions;