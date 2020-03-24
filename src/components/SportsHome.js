import React from 'react';
import Parallaxx from './Parallaxx'

const Sports = () => {
    return (
        <div className="sports">
            <Parallaxx 
                text={'Sports'}
                image={'https://i.pinimg.com/originals/b0/56/f2/b056f2c2f37a44bb3268d81cd1f3d1e0.jpg'}
                url={'/sports'}
                // height={'100vh'}
            />
        </div>
    );
};

export default Sports;