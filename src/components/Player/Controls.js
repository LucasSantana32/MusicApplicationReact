import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    return (
        <div className="c-player--controls">
            <div className="vol">
                <span class="volum"><i class="fas fa-volume-down"></i></span>
                <input type="range" name="volBar" id="volBar"></input>
            </div> 

            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>

            <div className="progressb">
                <input type="range" name="progressBar"></input>
                <span class="currentTime"></span>
                <p id="timer">1:30</p>
            </div> 
        </div>
        
    )
}

export default Controls
