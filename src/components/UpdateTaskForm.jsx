import React from 'react'
import Input from './Input'
import Button from './Button'

const UpdateTaskForm = ({buttonClick}) => {
  return (
    <div>
      <Input label='Краткое описание' error='Заголовок не может быть пустым.' />
      <Button onClick={() => buttonClick('Button clicked')}>Создать</Button>
      <Button onClick={() => buttonClick('Button clicked')}>Вернуться к списку</Button>
    </div>
  )
}

export default UpdateTaskForm