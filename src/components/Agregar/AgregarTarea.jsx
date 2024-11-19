import React, { useContext, useState } from 'react'; 
import { TareasContext } from '../../context/Tareas'; 
import './AgregarTarea.css'


const AgregarTarea = () => {
    const { agregarTarea } = useContext(TareasContext);

    
    const [nuevaTarea, setNuevaTarea] = useState({ nombre: '', descripcion: '' });

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;

      
        setNuevaTarea((prevTarea) => ({
            ...prevTarea, 
            [name]: value, 
        }));
    };

    
    const handleAgregarTarea = () => {
       
        if (nuevaTarea.nombre.trim() === '' || nuevaTarea.descripcion.trim() === '') {
           
            alert('Por favor, completa todos los campos.');
            return; 
        }

       
        agregarTarea({
            id: Date.now(), 
            ...nuevaTarea, 
        });

       
        setNuevaTarea({ nombre: '', descripcion: '' });
    };

    return (
        <div>
           
            <br />
            <h2 className="TittleMainApp">Agregar Tarea</h2>

            <br /><br />
            <form>
                
                <div className='flex'>
                    <label>
                        <div className='flex'>
                            <h4 id='margin'>Nombre:</h4>
                        <input
                            type="text"
                            name="nombre"
                            className="form-control-1"
                            placeholder="Ingrese Tarea"
                            aria-label="Tarea"
                            aria-describedby="button-addon2"
                            value={nuevaTarea.nombre}
                            onChange={handleInputChange}
                        />
                        </div>
                    </label>
                </div>
                <br />

                <div className='flex'>
                    <label className='flex'>
                        <h4 >Descripcion:</h4>
                        <textarea
                            type="text"
                            name="descripcion"
                            className="form-control-1"
                            placeholder="Ingrese Tarea"
                            aria-label="Tarea"
                            aria-describedby="button-addon2"
                            value={nuevaTarea.descripcion}
                            onChange={handleInputChange}
                        ></textarea>
                    </label>
                </div>
                <br />

               
                <button type="button" className="btn btn-secondary" id="button-addon2" onClick={handleAgregarTarea}>Agregar Tarea</button>
            </form>
        </div>
    );
};

export default AgregarTarea;
