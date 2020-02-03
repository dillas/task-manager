import React from 'react'
import Input from './Input'
import Button from './Button'


const AddTaskForm = ({changeNewTaskField, newTaskName, createTask}) => {

  return (
      <form>
        <Input value={newTaskName} handleChange={changeNewTaskField} label='Краткое описание' error='Заголовок не может быть пустым.' />
        <Button type='secondary' label='Создать' handleClick={() => createTask(newTaskName)} />
      </form>
  )
}

export default AddTaskForm