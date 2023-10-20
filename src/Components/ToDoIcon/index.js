import React from "react";
import { ReactComponent as CheckSVG} from '../CompleteIcon/CompleteIcon.svg'
import { ReactComponent as DeleteSVG} from '../DeleteIcon/DeleteIcon.svg'
import './ToDoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSVG 
    className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG 
    className="Icon-svg" fill={color} />
};

function ToDoIcon({ type, color, onClick }) {
    return (
        <span 
        className={`Icon-container 
        Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {ToDoIcon};
