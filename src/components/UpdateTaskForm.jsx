import React from 'react'
import Input from './Input'
import Button from './Button'

const UpdateTaskForm = ({buttonClick}) => {
  return (
    <div>
      <Input label='Краткое описание' error='Заголовок не может быть пустым.' />
      <Button type='secondary' label='Создать' handleClick={() => buttonClick('Button clicked')} />
      <Button type='secondary' label='Вернуться к списку' handleClick={() => buttonClick('Button clicked')} />
    </div>
  )
}

export default UpdateTaskForm