// src/context/Tareas.js

// Importamos las funciones necesarias de React: 'createContext' y 'useState'.
// 'createContext' se usa para crear un contexto en React, que nos permite compartir datos entre componentes.
import { createContext, useState } from 'react';

// Creamos un nuevo contexto para las tareas, que será utilizado para almacenar y compartir la información
// de las tareas en toda la aplicación.
const TareasContext = createContext();

// Componente 'ProveedorDeTareas' que usará el contexto para proporcionar los datos de las tareas
// y las funciones relacionadas a sus hijos (componentes hijos que consuman este contexto).
const ProveedorDeTareas = ({ children }) => {
    // Definimos un arreglo de tareas iniciales. Cada tarea tiene un 'id', 'nombre' y 'descripcion'.
    const tareasIniciales = [
        { id: 1, nombre: 'Hacer la compra', descripcion: 'Comprar alimentos y productos necesarios.' },
        { id: 2, nombre: 'Estudiar React', descripcion: 'Revisar la documentación y hacer ejercicios.' },
        { id: 3, nombre: 'Ir al gimnasio', descripcion: 'Realizar ejercicios de cardio y pesas.' }
    ];

    // Aquí usamos el 'useState' de React para gestionar el estado de las tareas.
    // 'tareas' es el estado actual, y 'setTareas' es la función para actualizar ese estado.
    const [tareas, setTareas] = useState(tareasIniciales);

    // Esta función agrega una nueva tarea al estado 'tareas'.
    const agregarTarea = (nuevaTarea) => {
        // Actualiza el estado agregando la nueva tarea al final del arreglo actual de tareas.
        setTareas([...tareas, nuevaTarea]);
    };

    // Esta función elimina una tarea por su 'id'.
    const eliminarTarea = (id) => {
        // Usamos el método 'filter' para crear un nuevo arreglo que no incluya la tarea con el 'id' dado.
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        // Actualizamos el estado con el nuevo arreglo sin la tarea eliminada.
        setTareas(nuevasTareas);
    };

    // Esta función permite editar una tarea existente. Recibe el 'id' de la tarea a editar
    // y un objeto 'nuevaTarea' con los nuevos datos de la tarea.
    const editarTarea = (id, nuevaTarea) => {
        // Usamos 'map' para recorrer todas las tareas y modificar la tarea que tiene el 'id' correspondiente.
        const nuevasTareas = tareas.map((tarea) =>
            // Si la tarea tiene el mismo 'id', la actualizamos con los datos de 'nuevaTarea'.
            tarea.id === id ? { ...tarea, ...nuevaTarea } : tarea
        );
        // Actualizamos el estado con el nuevo arreglo de tareas modificadas.
        setTareas(nuevasTareas);
    };

    // El 'ProveedorDeTareas' envuelve a los 'children' (componentes hijos) y les proporciona acceso al contexto
    // mediante el 'TareasContext.Provider'.
    // En el 'value', pasamos las tareas actuales y las funciones para agregar, eliminar y editar tareas.
    return (
        <TareasContext.Provider value={{ tareas, agregarTarea, eliminarTarea, editarTarea }}>
            {children} {/* Los componentes hijos tendrán acceso a las tareas y funciones proporcionadas */}
        </TareasContext.Provider>
    );
};

// Exportamos el 'ProveedorDeTareas' para que pueda ser utilizado en otras partes de la aplicación,
// y también exportamos el 'TareasContext' para que los componentes hijos puedan consumir este contexto.
export { ProveedorDeTareas, TareasContext };
