import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { AuthProvider } from './components/context';
import Inicio from './components/inicio';
import IniciarSesion from './components/iniciarsesion';
import Registrarme from './components/registrarme';
import ConfirmarRegistro from './components/confirmarregistro';
import CrearUnirse from './components/crearunirse';
import CrearComedor from './components/crearcomedor';
import UnirseComedor from './components/unirsecomedor';
import InicioUser from './components/iniciouser';
import Stock from './components/stock';
import AgregarProducto from './components/agregarproducto';
import Menu from './components/menu';
import Recetas from './components/recetas';
import CrearReceta from './components/crearreceta';


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
            <Route path='/:email/crearcomedor' element={ <CrearComedor /> } />
            <Route path='/:email/unirseacomedor' element={ <UnirseComedor /> } />
            <Route path='/:email/inicio/:nombrecomedor' element={ <InicioUser /> } />
            <Route path='/:email/stock/:nombrecomedor' element={ <Stock /> } />
            <Route path='/:email/menu/:nombrecomedor' element={ <Menu /> } />
            <Route path='/:email/recetas/:nombrecomedor' element={ <Recetas /> } />
            <Route path='/:email/agregarproducto/:nombrecomedor' element={ <AgregarProducto /> } />
            <Route path='/:email/crearreceta/:nombrecomedor' element={ <CrearReceta /> } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
