import React from 'react'
import Header from './Header'
import Button from './Button'
import { deleteIcon } from './Icons'
import UpdateTaskForm from './UpdateTaskForm'

const UpdateTasksPage = () => {

  const buttonClick = (text) => {
    console.log(text)
  }

  const headerButton = <Button onClick={() => buttonClick('Button clicked')}>Удалить {deleteIcon}</Button>

  return (
    <>
      <Header title='Задача №1255' button={headerButton} />
      <UpdateTaskForm buttonClick={buttonClick} />
    </>
  )
}

export default UpdateTasksPage