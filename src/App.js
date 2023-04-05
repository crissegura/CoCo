import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { AuthProvider } from './components/context';
import Inicio from './components/inicio';
import IniciarSesion from './components/iniciarsesion';
import Registrarme from './components/registrarme';
import ConfirmarRegistro from './components/confirmarregistro';
import CrearUnirse from './components/crearunirse';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Inicio /> } />
            <Route path='/iniciarsesion' element={ <IniciarSesion /> } />
            <Route path='/registrarme' element={ <Registrarme /> } />
            <Route path='/confirmarregistro' element={ <ConfirmarRegistro /> } />
            <Route path='/:email' element={ <CrearUnirse /> } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
