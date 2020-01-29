import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Layout from './Layout'
import { deleteIcon } from './Icons'
import UpdateTaskForm from './UpdateTaskForm'

const UpdateTasksPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const buttonClick = (text) => {
    console.log(text)
  }

  const headerButton = <Button icon={deleteIcon} type='error' label='Удалить' handleClick={() => buttonClick('Button clicked')} />

  return (
    <Layout  modalIsOpen={modalIsOpen} closeModal={closeModal} buttonClick={buttonClick}>
      <Header title='Задача №1255' button={headerButton} />
      <UpdateTaskForm buttonClick={buttonClick} />
    </Layout>
  )
}

export default UpdateTasksPage