import React from 'react'
import Header from './Header'
import Button from './Button'
import TaskList from './TaskList'
import Modal from './Modal'
import AddTaskForm from './AddTaskForm'

const TasksPage = ({tasks, deleteTask, changeNewTaskField, newTaskName, modalIsOpen, openModal, closeModal, createTask}) => {

  const headerButton = <Button btnType='secondary' onClick={openModal}>Добавить</Button>

  return (
    <>
      <Header title='Список задач' button={headerButton} />
      <TaskList data={tasks} deleteTask={deleteTask}/>


      <Modal title='Создать задачу' isOpen={modalIsOpen} onCancel={closeModal}>
        <AddTaskForm newTaskName={newTaskName} changeNewTaskField={changeNewTaskField} createTask={createTask}/>
      </Modal>

     {/* { modalIsOpen &&
        <Modal title='Создать задачу' onRequestClose={closeModal}>
          <AddTaskForm createTask={createTask} changeNewTaskField={changeNewTaskField} newTaskName={newTaskName} />
        </Modal> }*/}
    </>
  )
}

export default TasksPage