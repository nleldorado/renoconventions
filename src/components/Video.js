import React, {useState} from 'react';
import ModalVideo from 'react-modal-video'

import Play from '../images/play-circle-solid.svg'

const Video = ({id, channel}) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <ModalVideo channel={channel} isOpen={isOpen} videoId={id} onClose={() => setIsOpen(false)} />
            <button onClick={openModal}><img className="play-button" src={Play} alt="Play Button" /></button>
        </>
    );
};

export default Video;