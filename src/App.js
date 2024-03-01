import React, { useEffect } from 'react';
import './App.css';
import { Album } from './components/album';
import { Artista } from './components/artista';
import { Cancion } from './components/cancion';
import { Eliminar } from './components/eliminar';
import { Favorito } from './components/favorito';
import { Tarjeta } from './components/tarjeta';

async function fetchData() {
  var ajustesBusqueda1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=mora",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "d8527b0c1cmsh09072a88a3a2b07p12ff04jsn6ae2a4d04f82"
    }
  }

  // Realizar la búsqueda del artista
  fetch(ajustesBusqueda1.url, {
    method: ajustesBusqueda1.method,
    headers: ajustesBusqueda1.headers
  })
    .then(response => response.json())
    .then(resultadoBusqueda1 => {
      console.log("Array de la busqueda: ");
      console.log(resultadoBusqueda1);
    });
}

function App() {
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <Album />
        <Artista />
        <Cancion />
        <Eliminar />
        <Favorito />
        <Tarjeta />
      </header>
    </div>
  );
}

export default App;
