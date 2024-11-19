import React, { useContext, useState, useEffect } from 'react'; 
import { TareasContext } from '../../context/Tareas'; 
import { Link } from 'react-router-dom'; 
import './VerTodasLasTareas.css';

const VerTodasLasTareas = () => {
    const { tareas, eliminarTarea } = useContext(TareasContext);

    const [tareasSeleccionadas, setTareasSeleccionadas] = useState([]);

    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    useEffect(() => {
        setTareasSeleccionadas(tareas.map(tarea => tarea.id));
    }, [tareas]);

    
    const handleEliminarTarea = (id) => {
        
        eliminarTarea(id);
    };

    
    const handleSeleccionarTarea = (id) => {
    
        setTareaSeleccionada(id);
    };

    return (
        <div>
            <br/>
            <h2>Ver Todas las Tareas</h2>
            {tareas.length === 0 ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <ul id='marg'>
                        {tareas.map((tarea) => (
                            <div className="list-group">
                                <div className="group-btn-list">
                                    <a href='#' className="list-group-item list-group-item-action disabled" key={tarea.id}>
                                        {tarea.nombre} - {tarea.descripcion}
                                    </a>
                                        <button className="btn btn-secondary" onClick={() => handleSeleccionarTarea(tarea.id)}>Seleccionar</button>
                                        <button className="btn btn-secondary" type="button" id="button-addon3" onClick={() => handleEliminarTarea(tarea.id)}><box-icon name="trash"></box-icon></button>
                                        
                                        
                                </div>
                            </div>
                        ))}
                    </ul>
                    {tareasSeleccionadas.length > 0 && tareaSeleccionada && (
                        <Link to={`/editar/${tareaSeleccionada}`} className='edit' >Editar Tarea Seleccionada</Link>
                    )}
                    
                </div>
            )}
        </div>
    );
};

export default VerTodasLasTareas;
