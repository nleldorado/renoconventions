import React, {useState} from 'react';
import ModalVideo from 'react-modal-video'
import PropTypes from "prop-types"
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

Video.propTypes = {
    id: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,

};

export default Video;