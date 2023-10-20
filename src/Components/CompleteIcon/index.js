import React from "react";
import { ToDoIcon } from "../ToDoIcon/index";


function CompleteIcon ({ completed, onComplete }) {
    return (
        <ToDoIcon 
        type="check"
        color={completed ? "greenyellow" : "rgb(154, 123, 154)"}
        onClick={onComplete}
        />
        );
}

export {CompleteIcon};