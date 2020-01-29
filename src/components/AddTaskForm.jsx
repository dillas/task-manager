import React from 'react'
import Input from './Input'
import Button from './Button'

const AddTaskForm = ({buttonClick}) => {
  return (
    <div>
      <Input label='Краткое описание' error='Заголовок не может быть пустым.' />
      <Button type='secondary' label='Создать' handleClick={() => buttonClick('Button clicked')} />
    </div>
  )
}

export default AddTaskForm