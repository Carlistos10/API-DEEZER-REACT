import React from 'react';
import { Link } from 'react-router-dom';
import './tarjeta.css';


export const Tarjeta = ({ data }) => {
  const { title, album, artist } = data;

  return (
    <div className="container">
      <div className="card">
        <Link to={`/detalleCancion/${artist.name}/${album.title}/${title}`}>
          <div className="imgBx">
            <img src={album.cover_medium} alt='' />
          </div>
        </Link>
        <div className="contentBx">
          <h2>{title}</h2>
          <div className="size">
            <h3>Artista :</h3>
            <Link to={`/detalleArtista/${artist.name}`}>
              <span>{artist.name}</span>
            </Link>
          </div>
          <div className="color">
            <h3>Álbum :</h3>
            <Link to={`/detalleAlbum/${album.title}`}>
              <span>{album.title}</span>
            </Link>
          </div>
        </div>
      </div>

    </div >
  );
};
