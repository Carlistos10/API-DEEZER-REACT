import React from 'react';
import './tarjeta.css'
import { Album } from './album';
import { Artista } from './artista';
import { Cancion } from './cancion';



export const Tarjeta = ({ data }) => {
    const {
        title,
        album,
        artist,


    } = data;

    return (
        <div className="container">
            <a href="#">
                <Cancion data />
                <div className="card">
                    <div className="imgBx">
                        <img src={`${album.cover_medium}`} alt='' />

                    </div>
                    <div className="contentBx">
                        <h2>{title}</h2>
                        <div className="size">
                            <h3>Artista :</h3>
                            <a href=""><span>{artist.name}</span></a>
                            <Artista data={artist} />

                        </div>
                        <div className="color">
                            <h3>Album :</h3>
                            <a href=""><span>{album.title}</span></a>
                            <Album data={album} />
                        </div>
                        <a className="esp" href="">Guardar</a>
                        {/*Deberia llevar a informacion mas detallada de la cancion*/}
                    </div>
                </div>
            </a>
        </div>
    );
};
