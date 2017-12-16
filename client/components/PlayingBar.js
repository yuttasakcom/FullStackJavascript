import React from 'react'

const PlayingBar = () => (
  <div className="playingContainer bg-dark">
    <div className="d-flex playing">
      <div className="playing-left">
        <div className="content">
          <span className="albumLink">
            <img
              className="albumArtwork"
              src="/statics/img/square.jpg"
              alt="Square Image"
            />
          </span>

          <div className="trackInfo">
            <span className="trackName">
              <span>Happy Birthday</span>
            </span>

            <span className="artistName">
              <span>Yo Programmer</span>
            </span>
          </div>
        </div>
      </div>
      <div className="playing-center d-flex flex-column align-items-center">
        <div className="content playerControls">
          <div className="buttons">
            <button className="controlButton shuffle" title="Shuffle button">
              <img src="/statics/img/icons/shuffle.png" alt="Shuffle" />
            </button>

            <button className="controlButton previous" title="Previous button">
              <img src="/statics/img/icons/previous.png" alt="Previous" />
            </button>

            <button className="controlButton play" title="Play button">
              <img src="/statics/img/icons/play.png" alt="Play" />
            </button>

            <button className="controlButton pause" title="Pause button">
              <img src="/statics/img/icons/pause.png" alt="Pause" />
            </button>

            <button className="controlButton next" title="Next button">
              <img src="/statics/img/icons/next.png" alt="Next" />
            </button>

            <button className="controlButton repeat" title="Repeat button">
              <img src="/statics/img/icons/repeat.png" alt="Repeat" />
            </button>
          </div>

          <div className="playbackBar d-flex">
            <span className="progressTime current">0.00</span>
            <div className="progressBar">
              <div className="progressBarBg">
                <div className="prog" />
              </div>
            </div>
            <span className="progressTime memaining">0.00</span>
          </div>
        </div>
      </div>
      <div className="playing-right">
        <div className="volumeBar">
          <button className="controlButton volume" title="Volume button">
            <img src="/statics/img/icons/volume.png" alt="Volume" />
          </button>

          <div className="progressBar">
            <div className="progressBarBg">
              <div className="prog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PlayingBar
