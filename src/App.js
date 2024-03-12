import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Busqueda } from './components/busqueda';
import Cancion from './components/cancion';
import { Artista } from './components/artista';
import { Album } from './components/album';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Busqueda />} />
          <Route path="/detalleCancion/:artist/:album/:cancion" element={<Cancion />} />
          <Route path="/detalleArtista/:artist" element={<Artista />} />
          <Route path="/detalleAlbum/:album" element={<Album />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
