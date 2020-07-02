import React from 'react';
import Counter from './Counter';

const CountIntersectionObserver = () => {
    return (
        <div className="countdown">
            <div className="count">
                <Counter target={3} title='Resorts' duration={3} />
            </div>
            <div className="count">
                <Counter target={5000} title='Luxury Rooms/Suites' duration={3} />
            </div>
            <div className="count">
                <Counter target={55} title='Restaurants' duration={3} />
            </div>
            <div className="count">
                <Counter target={100} title='Meeting Space' duration={3} />
            </div>
        </div>
    );
};

export default CountIntersectionObserver;