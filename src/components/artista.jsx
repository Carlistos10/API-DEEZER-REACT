import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const Artista = () => {
    const { artist } = useParams(); // Obtén los parámetros de la URL


    return (
        <div>
            <h1>Detalles del artista: {artist}</h1>
            <p>Este artista tiene una gran variedad de albumes, y ha colaborado en una gran variedad de proyectos</p>
            <Link to={`/`}>
                <span>Volver</span>
            </Link>
        </div>
    );
};
