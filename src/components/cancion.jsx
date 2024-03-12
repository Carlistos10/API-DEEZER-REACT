import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Cancion = () => {
  const { artist, album, cancion } = useParams(); // Obtén los parámetros de la URL

  return (
    <div>
      <h1>Detalles de la Canción: {cancion}</h1>
      <p>Artista: {artist}</p>
      <p>Álbum: {album}</p>
      <Link to={`/`}>
        <span>Volver</span>
      </Link>
    </div>
  );
};

export default Cancion;
