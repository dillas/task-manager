import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Layout from './Layout'
import TaskList from './TaskList'
import Modal from './Modal'
import AddTaskForm from './AddTaskForm'


const TasksPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [data] = useState({items: [
      {id: '1', title: 'Task 1'},
      {id: '2', title: 'Task 2'},
      {id: '3', title: 'Task 3'},
    ]})

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const buttonClick = (text) => {
    console.log(text)
  }

  const headerButton = <Button type='secondary' label='Добавить' handleClick={openModal} />

  return (
    <Layout  modalIsOpen={modalIsOpen} closeModal={closeModal} buttonClick={buttonClick}>
      <Header title='Список задач' button={headerButton} />
      <TaskList data={data}/>{ modalIsOpen &&
    <Modal
      title='Создать задачу'
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <AddTaskForm buttonClick={buttonClick}/>
    </Modal>
    }
    </Layout>
  )
}

export default TasksPage