import React from "react";
import './ToDoForm.css'
import { ToDoContext } from "../ToDoContext";

function ToDoForm() {
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewToDoValue(event.target.value);
    }


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe una nueva tarea</label>
            <textarea
                placeholder="Ir al súper por manzanas"
                value={newToDoValue}
                onChange={onChange}
                cols="24"
                rows="3"
                required
            />

            <div className="ToDoDorm-buttonContainer">
                <button
                    type="button"
                    className="ToDoForm-button
                    ToDoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    type="submit"
                    className="ToDoForm-button
                    ToDoForm-button--add"
                    onClick={onSubmit}
                >Añadir</button>

            </div>
        </form>
    )
}

export { ToDoForm };