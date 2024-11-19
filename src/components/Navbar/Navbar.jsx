import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
            <div className="container-fluid">

                <div className={`menu ${menuAbierto ? 'abierto' : ''}`}>

                    <ul className ="navbar-nav me-auto">
                        <li className ="nav-item">
                            <Link to="/agregar" onClick={toggleMenu} className ="nav-link"> 
                                Agregar Tarea
                            </Link>
                        </li>

                        <li className ="nav-item">
                            <Link to="/ver-todas" onClick={toggleMenu} className ="nav-link"> 
                                Ver Todas las Tareas
                            </Link>
                        </li>

                        <li className ="nav-item">
                            <Link to="/editar/1" onClick={toggleMenu} className ="nav-link">
                                Editar Tarea
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
