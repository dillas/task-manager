import React from 'react'
import Input from './Input'
import Button from './Button'


const AddTaskForm = ({changeNewTaskField, newTaskName, createTask}) => {

  const onSubmitForm = (e) => {
    debugger
    e.preventDefault()
    createTask(newTaskName)
  }

  const onInputChange = (e) => {

    changeNewTaskField(e.target.value)
  }

  return (
      <form>
        <Input value={newTaskName} onChange={onInputChange} label='Краткое описание' error='Заголовок не может быть пустым.' />
        <Button onClick={onSubmitForm} type='submit'>Создать</Button>
      </form>
  )
}

export default AddTaskForm