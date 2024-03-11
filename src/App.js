import React, { useState } from 'react';
import './App.css';
import { Album } from './components/album';
import { Artista } from './components/artista';
import { Cancion } from './components/cancion';
import { Eliminar } from './components/eliminar';
import { Favorito } from './components/favorito';
import { Tarjeta } from './components/tarjeta';
import { Busqueda } from './components/busqueda';

async function fetchData(searchTerm) {
  if (!searchTerm) return [];

  const ajustesBusqueda = {
    "async": true,
    "crossDomain": true,
    "url": `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "d8527b0c1cmsh09072a88a3a2b07p12ff04jsn6ae2a4d04f82"
    }
  }

  return fetch(ajustesBusqueda.url, {
    method: ajustesBusqueda.method,
    headers: ajustesBusqueda.headers
  })
    .then(response => response.json())
    .then(resultadoBusqueda => {
      console.log("Array de la busqueda: ");
      console.log(resultadoBusqueda);
      return resultadoBusqueda.data || [];
    })
    .catch(error => {
      console.error('Error al realizar la búsqueda:', error);
      return [];
    });
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData(searchTerm)
        .then(results => setSearchResults(results));
    }
  };

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