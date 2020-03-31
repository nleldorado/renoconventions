import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Parallaxx from './Parallaxx'

const Golf = () => {
    return (
        <div>
            <Parallaxx 
                text={'Golf Courses'} 
                image={'https://images.unsplash.com/photo-1535132011086-b8818f016104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'} 
                url={'/golf'}
            />
        </div>
    );
};

export default Golf;