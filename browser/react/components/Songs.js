import React from 'react';

const Songs = ({ songs, currentSong, isPlaying, toggleOne }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Artists</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>
      {
        songs && songs.map(song => (
          <tr key={song.id}>
            <td>
              <button className="btn btn-default btn-xs" onClick={() => toggleOne(song, songs)}>
                <span className={`glyphicon ${song.id === currentSong.id && isPlaying ? 'glyphicon-pause' : 'glyphicon-play'}`} />
              </button>
            </td>
            <td>{ song.name }</td>
            <td>
              <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
            </td>
            <td>{ song.genre }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default Songs;
