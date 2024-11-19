import React, { useContext, useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { TareasContext } from '../../context/Tareas'; 

const EditarTarea = () => {
    const { id } = useParams();
    const { tareas, editarTarea } = useContext(TareasContext);
    const [tareaEditada, setTareaEditada] = useState({ nombre: '', descripcion: '' });

    useEffect(() => {
        
        const tareaSeleccionada = tareas.find((tarea) => tarea.id === parseInt(id, 10));
        
        if (tareaSeleccionada) {
            setTareaEditada(tareaSeleccionada);
        }
    }, [id, tareas]); 

    const handleInputChange = (e) => {
        
        const { name, value } = e.target;

        setTareaEditada((prevTarea) => ({
            ...prevTarea,
            [name]: value, e
        }));
    };

    const handleEditarTarea = () => {
        if (tareaEditada.nombre.trim() === '' || tareaEditada.descripcion.trim() === '') {
            alert('Por favor, completa todos los campos.'); 
            return; 
        }

        editarTarea(parseInt(id, 10), tareaEditada);
    };

    return (
        <div>
            <h2 className = "TittleMainApp">Editar Tarea</h2>
            
            <form>
                <label>
                    Nombre:
                    <input 
                        type="text" 
                        name="nombre" 
                        className="form-control"
                        placeholder="Ingrese Tarea"
                        aria-label="Tarea"
                        aria-describedby="button-addon2"
                        value={tareaEditada.nombre} 
                        onChange={handleInputChange} 
                    />
                </label>
                <br />

                <label>
                    Descripción:
                    <textarea 
                        type="text" 
                        name="descripcion" 
                        className="form-control"
                        placeholder="Ingrese Tarea"
                        aria-label="Tarea"
                        aria-describedby="button-addon2"
                        value={tareaEditada.descripcion} 
                        onChange={handleInputChange} 
                    />
                </label>
                <br />

                <button type="button" className="btn btn-secondary" id="button-addon2" onClick={handleEditarTarea}>Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditarTarea;
