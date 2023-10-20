import { AddIcon } from '../AddIcon';
import './CreateToDoButton.css'

function CreateToDoButton({setOpenModal}) {
    return (
        <button 
        className="CreateToDoButton"
        onClick={
            () => {
                setOpenModal(state => !state);
            }
        }
        >
            <AddIcon />
        </button>
    );
}

export { CreateToDoButton };