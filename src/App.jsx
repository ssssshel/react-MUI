
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './pages/Index';
import Botones from './pages/Botones';
import Iconos from './pages/Iconos';
import Fuentes from './pages/Fuentes';
import Estilos from './pages/Estilos';
import TemaGlobal from './pages/TemaGlobal';
import Ejemplo from './pages/Ejemplo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />  
        <Route path='/botones' element={<Botones />} />
        <Route path='/iconos' element={<Iconos />} />
        <Route path='/fuentes' element={<Fuentes />} />
        <Route path='/estilos' element={<Estilos/>} />
        <Route path='/temaglobal' element={<TemaGlobal/>} />
        <Route path='/app' element={<Ejemplo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
