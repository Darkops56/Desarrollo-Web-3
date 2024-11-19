import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './App.css'
import 'boxicons';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ProveedorDeTareas } from './context/Tareas';
import AgregarTarea from './components/Agregar/AgregarTarea'; 
import EditarTarea from './components/Editar/EditarTarea'; 
import VerTodasLasTareas from './components/VerTodas/VerTodasLasTareas';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <ProveedorDeTareas>
        <Navbar />
        <div id = 'div-general'>
        <Routes>
          <Route path="/agregar" element={<AgregarTarea />} />
          <Route path="/editar/:id" element={<EditarTarea />} />
          <Route path="/ver-todas" element={<VerTodasLasTareas />} />
        </Routes>
        </div>
      </ProveedorDeTareas>
    </Router>
  );
};

export default App
