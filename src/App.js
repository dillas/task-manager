import React, { useState } from 'react'
import './App.module.scss'
import Button from './components/Button'
import Input from './components/Input'
import Task from './components/Task'
import Footer from './components/Footer'
import Header from './components/Header'
import Modal from './components/Modal'
import { deleteIcon } from './components/Icons'

const buttonClick = (text) => {
  console.log(text)
}


function App () {
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

  return (
    <div>
      <Header title='Список задач' button=headerButton />
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
      <Footer />
      { modalIsOpen && <Modal title='Создать задачу' isOpen={modalIsOpen} onRequestClose={closeModal} >
        <Input label='Краткое описание' error='Заголовок не может быть пустым.' />
        <Button type='secondary' label='Создать' handleClick={() => buttonClick('Button clicked')} />

      </Modal>}
    </div>
  )
}

export default App
