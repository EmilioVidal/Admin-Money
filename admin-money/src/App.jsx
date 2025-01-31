import React from 'react';
import Sign_in from './SignIn/Sign_in.jsx';
import Registro from './SignIn/Registro.jsx';
import Hola from './SignIn/Hola.jsx';
import MenuPrincipal from './MenuPrinc/MenuPrincipal.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_in />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/bienvenido" element={<Hola />} />
        <Route path="/menu" element={<MenuPrincipal />} />
      </Routes>
    </Router>
  );
};

export default App;
