import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Parallaxx from './Parallaxx'

const Conventions = () => {
    return (
        <div>
            <Parallaxx 
                text={'Conventions'} 
                image={'https://q-cf.bstatic.com/images/hotel/max1280x900/164/164341038.jpg'} 
                url={'/conventions'}
            />
        </div>
    );
};

export default Conventions;