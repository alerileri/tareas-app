import React from 'react';
import './ToDoSearch.css';
import { ToDoContext } from '../ToDoContext';

function ToDosearch(){
    const{searchValue, 
    setSearchValue
} = React.useContext(ToDoContext);
    
    return (
        <input 
        placeholder="Buscar tareas de..."
        className='ToDoSearch'
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
    );
};

export { ToDosearch };