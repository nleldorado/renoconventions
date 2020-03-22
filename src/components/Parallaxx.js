import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from "gatsby"

const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };


const Parallaxx = ({text, image, url}) => {
    return (
        <div>
            <Parallax
            bgImage={image}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `linear-gradient(
                            rgba(255, 255, 255, 0), rgba(33, 33, 33, ${percentage * 1}))`,
                        left: "50%",
                        top: "50%",
                      
                        transform: "translate(-50%,-50%)",
                        width: '100%',
                        height: '100%',
                    }}
                >
                </div>
            )}
        >
            
           <div className="parallax">
                <div className="parallax-title" style={insideStyles}>
                    <Link to={url}><h1>{text}</h1></Link>
                </div>
            </div>
            
        </Parallax>
        </div>
    );
};

export default Parallaxx;