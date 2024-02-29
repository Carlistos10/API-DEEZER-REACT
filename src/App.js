import './App.css';
import { Album } from './components/album';
import { Artista } from './components/artista';
import { Cancion } from './components/cancion';
import { Eliminar } from './components/eliminar';
import { Favorito } from './components/favorito';
import { Tarjeta } from './components/tarjeta';

function App() {
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
