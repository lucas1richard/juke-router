import React from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';
import { Link } from 'react-router';

class Artist extends React.Component {
  componentDidMount() {
    const { routeParams: {artistId}, selectArtist} = this.props;

    selectArtist(artistId);
  }
  render() {
    const { artist, children, toggle } = this.props;

    return (
      <div>
        <h1>{artist.name}</h1>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, Object.assign({}, this.props, { songs: artist.songs, albums: artist.albums, toggleOne: toggle })
        )  }
      </div>
    );
  }
}

export default Artist;
