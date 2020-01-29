import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import Task from './Task'
import { deleteIcon } from './Icons'
import Header from './Header'
import Modal from './Modal'
import AddTaskForm from './AddTaskForm'

const buttonClick = (text) => {
  console.log(text)
}

const MainPage = () => {
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
  const headerButton = <Button type='secondary' label='Добавить' handleClick={() => buttonClick('Button clicked')} />
  // const headerButton = 'Button'

  return (
        <div>

          <Header title='Список задач' button={headerButton} />
          <Button label='Открыть модальное окно' handleClick={openModal} />
          <Button label='Закрыть модальное окно' handleClick={closeModal} />
          {data && data.items.map(task => (
            <Task key={task.id} task={task} />
          ))}

          <Button icon={deleteIcon} type='primary' label='Добавить' handleClick={() => buttonClick('Button clicked')} />
          <Button type='secondary' label='Добавить' handleClick={() => buttonClick('Button clicked')} />
          <Input label='Краткое описание' error='Заголовок не может быть пустым.' />
          <Button type='primary' label='Добавить' handleClick={() => buttonClick('Button clicked')} />
          <Input label='Краткое описание' />
          <Input label='Краткое описание' error='Заголовок не может быть пустым.' />
          <Button type='error' label='Добавить' handleClick={() => buttonClick('Button clicked')} />
          <Input label='Краткое описание' />
          { modalIsOpen &&
          <Modal
            title='Создать задачу'
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <AddTaskForm buttonClick={buttonClick}/>
          </Modal>
          }
        </div>
  )
}

export default MainPage