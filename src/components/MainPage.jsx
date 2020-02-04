import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'
import Header from './Header'
import Portal from './Portal'

const MainPage = () => {

  const headerButton = <Link to='tasks'><Button onClick={() => {}} >Список задач</Button></Link>
  const buttonClick = () => {
    console.log('!!!!')
  }

  return <>
    <Header title='Тестовое задание' button={headerButton} />
    <p>Ссылка на GitHub: </p>
    <p>Ссылка на готовый проект (Heroku): </p>
    <Button btnType='secondary' onClick={ buttonClick }>Создать</Button>
    <Button btnType='primary' onClick={ buttonClick } disabled>Удалить</Button>
    <Button btnType='error' onClick={ buttonClick } active>Создать</Button>
    <Button onClick={ buttonClick } type='submit'>Создать</Button>
    <Button onClick={ buttonClick } href='submit'>Ссылка</Button>
    <Button onClick={ buttonClick } href='submit' disabled>Ссылка</Button>
    <Portal>Portal</Portal>
  </>
}

export default MainPage