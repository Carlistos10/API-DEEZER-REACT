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
            <div className="card">
                <div className="imgBx">
                    <img src={`${album.cover_medium}`} alt='' />
                </div>
                <div className="contentBx">
                    <h2>{title}</h2>
                    <div className="size">
                        <h3>Artista :</h3>
                        <span>{artist.name}</span>
                    </div>
                    <div className="color">
                        <h3>Album :</h3>
                        <span>{album.title}</span>
                    </div>
                    <a className="esp" href="#">Mas info</a>
                    {/*Deberia llevar a informacion mas detallada de la cancion*/}
                </div>
            </div>
        </div>
    );
};
