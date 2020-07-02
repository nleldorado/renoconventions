import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PropTypes from "prop-types"

const Counter = ({target, title, duration}) => {
    const [ref, inView] = useInView({
		threshold: 1,
		triggerOnce: true,
    });
    return (
        <div className="counter-inner" ref={ref}>
            <h4 className={`animation delay ${
                inView === true ? 'opacity-100 transform-show' : 'opacity-0 transform-hide'
                }`}>
                {title}
            </h4>
            <CountUp
                start={0}
                end={inView ? target : 0}
                duration={duration}
                seperator='.'
                useEasng={true}>
                {({ countUpRef }) => (
                    <span ref={countUpRef} />
                )}
            </CountUp>
        </div>
                     
       
    );
};

Counter.propTypes = {
    target: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
};

export default Counter;