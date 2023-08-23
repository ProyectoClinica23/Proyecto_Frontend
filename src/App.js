import Home from './Screens/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Estudios from "./Screens/Estudios/Estudios";
import Institucion from "./Screens/Institucional/Institucion";
import Usuario from "./Screens/Usuarios/Usuario";
import Contacto from './Screens/Contacto/Contacto';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/usuarios' element={<Usuario/>}/>
          <Route path='/estudios' element={<Estudios/>}/>
          <Route path='/institucional' element={<Institucion/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
