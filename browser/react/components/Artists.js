import React from 'react';
import { Link } from 'react-router';

const Artists = ({ artists }) => (
  <div className="list-group">
    <h3>Artists</h3>
    <div className="row">
    {
      artists.map(artist => (
        <div className="list-group-item" key={ artist.id }>
          <Link to={`/artists/${artist.id}`}>
            { artist.name }
          </Link>
        </div>
      ))
    }
    </div>
  </div>
);

export default Artists;
