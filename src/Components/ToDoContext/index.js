import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const ToDoContext = React.createContext();

function ToDoProvider({ children }) {
    const {
        item: toDos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage
            ('todoish_v1', []);

    const [searchValue, setSearchValue] =
        React.useState('');

    const[openModal, setOpenModal] = 
        React.useState(false);

    const completedToDos = toDos.filter(
        toDo => !!toDo.completed
    ).length;
    const totalToDos = toDos.length;

    const searchedToDos = toDos.filter(
        (toDo) => {
            const toDoText = (toDo.text || '').toLowerCase();
            const searchText = searchValue.toLowerCase();
            return toDoText.includes(searchText);
        }
    );

    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false,
        });
        saveTodos(newToDos);
    }

    const completeToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
            (toDo) => toDo.text === text
        );
        newToDos[toDoIndex].completed = true;
        saveTodos(newToDos);
    };

    const deleteToDo = (text) => {
        const newToDos = [...toDos];
        const toDoIndex = newToDos.findIndex(
            (toDo) => toDo.text === text
        );
        newToDos.splice(toDoIndex, 1);
        saveTodos(newToDos);
    };

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo,
        }}>
            {children}
        </ToDoContext.Provider>

    );
}


export { ToDoContext, ToDoProvider };