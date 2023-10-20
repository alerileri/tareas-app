import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {
    const {
        completedToDos,
        totalToDos
    } = React.useContext(ToDoContext)

    return (
        <h1 className='ToDoCounter'>
            Completaste <span>{completedToDos}</span> de  tus <span>{totalToDos}</span> tareas
        </h1>
    );
}

export { ToDoCounter };