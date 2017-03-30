import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  componentDidMount() {
    const { routeParams: {albumId}, selectAlbum } = this.props;

    selectAlbum(albumId);
  }
  render() {
    const { album: {name, imageUrl, songs}, currentSong, isPlaying, toggle } = this.props;
    return (
      <div className="album">
        <div>
          <h3>{ name }</h3>
          <img src={ imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={ songs }
          currentSong={ currentSong }
          isPlaying={ isPlaying }
          toggleOne={ toggle } />
      </div>
    );
  }
}

export default Album;
