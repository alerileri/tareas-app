import React from 'react';
import { ToDoCounter } from '../Components/ToDoCounter';
import { ToDosearch } from '../Components/ToDoSearch';
import { ToDoList } from '../Components/ToDoList';
import { Footer } from '../Components/Footer';
import { ToDoItem } from '../Components/ToDoItem';
import { ToDosLoading } from '../Components/ToDosLoading';
import { ToDosError } from '../Components/ToDosError';
import { EmptyToDos } from '../Components/EmptyToDos';
import { CreateToDoButton } from '../Components/CreateToDoButton';
import { ToDoForm } from '../Components/ToDoForm';
import { Modal } from '../Components/Modal';
import { ToDoContext } from '../Components/ToDoContext';

function AppUI() {
  const {
    loading,
    error,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal
  } = React.useContext(ToDoContext)

  return (
    <>
      <section className='container'>

        <ToDoCounter />
        <ToDosearch />

        <ToDoList>
          {loading && <ToDosLoading />}
          {error && <ToDosError />}
          {(!loading && searchedToDos.length === 0)
            && <EmptyToDos />}

          {searchedToDos.map(toDo => (
            <ToDoItem
              key={toDo.text}
              text={toDo.text}
              completed={toDo.completed}
              onComplete={() => completeToDo(toDo.text)}
              onDelete={() => deleteToDo(toDo.text)}
            />
          ))}
        </ToDoList>

        <CreateToDoButton
          setOpenModal={setOpenModal} />

        {openModal && (
          <Modal>
            <ToDoForm />
          </Modal>
        )}

      </section>
      <Footer />
    </>
  );
}

export { AppUI };