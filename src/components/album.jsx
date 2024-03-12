import React from 'react'
import { useParams, Link } from 'react-router-dom';

export const Album = () => {
    const { album } = useParams(); // Obtén los parámetros de la URL


    return (
        <div>
            <h1>Detalles del álbum: {album}</h1>
            <p>Este album pertenece a un gran artista, el cual dedica mucho tiempo e invierte una gran cantidad de dinero para lograr la maxima calidad en sus proyectos </p> {/* Muestra el nombre del artista */}
            <Link to={`/`}>
                <span>Volver</span>
            </Link>
        </div>
    );
}
