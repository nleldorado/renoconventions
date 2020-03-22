import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
                            end={inView ? target: 0}
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

export default Counter;