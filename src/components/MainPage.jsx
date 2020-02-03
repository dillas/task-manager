import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'
import Header from './Header'

const MainPage = () => {

  const headerButton = <Link to='tasks'><Button type='primary' label='Список задач' handleClick={() => {}} /></Link>

  return <>
        <Header title='Тестовое задание' button={headerButton} />
        <p>Ссылка на GitHub: </p>
        <p>Ссылка на готовый проект (Heroku): </p>

      </>
}

export default MainPage