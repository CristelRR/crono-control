import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SolicitudHorario from './components/solicitudHorario';
import Prueba from './components/prueba';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SolicitudHorario/>}></Route>
          <Route path='/prueba' element={<Prueba/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
