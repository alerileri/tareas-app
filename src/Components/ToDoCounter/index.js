import React from 'react';
//import { useToDos } from '../../App/useToDos';
import './ToDoCounter.css';


function ToDoCounter({completedToDos, totalToDos}) {
    

    return (
        <h1 className='ToDoCounter'>
            Completaste <span>{completedToDos}</span> de  tus <span>{totalToDos}</span> tareas
        </h1>
    );
}

export { ToDoCounter };