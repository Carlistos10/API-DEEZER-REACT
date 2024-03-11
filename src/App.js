import React, { useState } from 'react';
import './App.css';
import { Album } from './components/album';
import { Artista } from './components/artista';
import { Cancion } from './components/cancion';
import { Eliminar } from './components/eliminar';
import { Favorito } from './components/favorito';
import { Tarjeta } from './components/tarjeta';
import { Busqueda } from './components/busqueda';

function App() {

  return (
    <div className=''>
      <div className=''>
       
       <Busqueda/>
      </div>
      <div className="cb"></div>
    </div>
  );
}

export default App;
