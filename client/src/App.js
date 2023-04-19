import './App.css';
import { CrearUsuario } from './components/CrearUsuario';
import { EditarUsuario } from './components/EditarUsuario';
import { ListaUsuarios } from './components/ListaUsuarios';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">CRUD MERN Stack App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregarusuario">Crear Usuario</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ListaUsuarios/>}></Route> 
          <Route exact path='/agregarusuario' element={<CrearUsuario/>}></Route>
          <Route exact path='/editarusuario/:id' element={<EditarUsuario/>}></Route>
        </Routes>
      </BrowserRouter>

    </div> 
  );
}

export default App;
