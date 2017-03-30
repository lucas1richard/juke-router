import React from 'react';

const Player = ({ currentSong, isPlaying, progress, prev, toggle, next }) => (
  <footer>
    <div style={!currentSong.id ? {display: 'none'} : null}>
      <div className="pull-left">
        <button className="btn btn-default" onClick={prev}>
          <span className="glyphicon glyphicon-step-backward"></span>
        </button>
        <button className="btn btn-default" onClick={toggle}>
          <span className={isPlaying ? 'glyphicon glyphicon-pause' : 'glyphicon glyphicon-play'}></span>
        </button>
        <button className="btn btn-default" onClick={next}>
          <span className="glyphicon glyphicon-step-forward"></span>
        </button>
      </div>
      <div className="bar">
        <div className="progress">
          <div className="progress-bar" style={{width: `${progress * 100}%`}}></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Player;
