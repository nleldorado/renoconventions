import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };


const Parallaxx = ({text, image, url, height}) => {
    return (
        <div>
            <Parallax
            bgImage={image}
            strength={-200}
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
           <div className="parallax" style={{height: height}}>
           {/* <video src="//dl.dropbox.com/s/5z4jupv385iboiu/lab-coding.mp4" mute={true} autoplay="true" type="video/mp4" width="100%" height="y" /> */}

                <div className="parallax-title" style={insideStyles}>
                    <Fade down>
                        <Link to={url}><h1>{text}</h1></Link>
                    </Fade>
                </div>
            </div>
            
        </Parallax>
        </div>
        
    );
};

export default Parallaxx;