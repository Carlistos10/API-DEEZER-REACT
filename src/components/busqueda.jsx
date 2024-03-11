import React, { useState } from 'react'
import { Tarjeta } from './tarjeta';
import './busqueda.css'


export const Busqueda = () => {
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
    <div>
      <div className="main-container">
        <div className="left-container">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            onKeyPress={handleKeyPress}
          />

          {searchResults.length === 0 && searchTerm !== '' && (
            <p className="error-message">No se encontraron resultados para tu búsqueda.</p>
          )}
        </div>
        <div className="right-container">
          {searchResults.length === 0 && searchTerm !== '' ? (
            <p className="error-message"></p>
          ) : (

            searchResults.length > 0 && (
              <div className='row'>

                {/* Dividir el array en subarrays de tamaño 4 */}
                {searchResults.reduce((rows, item, index) => (index % 3 === 0 ? rows.push([item]) : rows[rows.length - 1].push(item)) && rows, []).map((row, rowIndex) => (
                  <div className='rowcv' key={rowIndex}>
                    {row.map(item => (
                      <div className='col-4' key={item.id}>
                        <Tarjeta data={item} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
