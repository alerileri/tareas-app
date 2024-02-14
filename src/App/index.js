import React from 'react';
import { useToDos } from './useToDos';
import { ToDoHeader } from '../Components/ToDoHeader';
import { ToDoCounter } from '../Components/ToDoCounter';
import { ToDoSearch } from '../Components/ToDoSearch';
import { ToDoList } from '../Components/ToDoList';
import { Footer } from '../Components/Footer';
import { ToDoItem } from '../Components/ToDoItem';
import { ToDosLoading } from '../Components/ToDosLoading';
import { ToDosError } from '../Components/ToDosError';
import { EmptyToDos } from '../Components/EmptyToDos';
import { CreateToDoButton } from '../Components/CreateToDoButton';
import { ToDoForm } from '../Components/ToDoForm';
import { Modal } from '../Components/Modal';


function App() {
  const {
    loading,
    error,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    addToDo,
  } = useToDos();

  return (
    <>
      <section className='container'>

        <ToDoHeader>
          <ToDoCounter
            totalToDos={totalToDos}
            completedToDos={completedToDos} />
          <ToDoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue} />
        </ToDoHeader>


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
            <ToDoForm 
            addToDo={ addToDo}
            setOpenModal = {setOpenModal}
            />
          </Modal>
        )}

      </section>
      <Footer />
    </>
  );
}

export default App;