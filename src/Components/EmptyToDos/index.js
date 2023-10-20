import React from "react";
import './EmptyToDos.css'

function EmptyToDos() {
    return (
        <section className="message-container">
            <p 
            className="message"
            >¡No hay tareas pendientes!</p>
            <p className="instruction">
                Haz clic en "+" para crear una nueva tarea
            </p>
        </section>
    )
}

export { EmptyToDos }