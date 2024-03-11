import React from 'react';
import './tarjeta.css'

export const Tarjeta = ({ data }) => {
    const {
        title,
        album,
        artist,


    } = data;

    return (
        <div className="container">
            <a href="#">
                <div className="card">
                    <div className="imgBx">
                        <img src={`${album.cover_medium}`} alt='' />
                    </div>
                    <div className="contentBx">
                        <h2>{title}</h2>
                        <div className="size">
                            <h3>Artista :</h3>
                            <a href="artista.jsx"><span>{artist.name}</span></a>

                        </div>
                        <div className="color">
                            <h3>Album :</h3>
                            <a href="album.jsx"><span>{album.title}</span></a>
                        </div>
                        <a className="esp" href="cancion.jsx">Guardar</a>
                        {/*Deberia llevar a informacion mas detallada de la cancion*/}
                    </div>
                </div>
            </a>
        </div>
    );
};
