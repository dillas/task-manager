import React from 'react'
import './App.module.scss'
import Layout from './components/Layout'
import { Route } from 'react-router-dom'
import TasksPage from './components/TasksPage'
import UpdateTasksPage from './components/UpdateTasksPage'
import MainPage from './components/MainPage'

const buttonClick = (text) => {
  console.log(text)
}

function App () {
  return (
    <>
      <Route path='/' exact><Layout buttonClick={buttonClick}><MainPage/></Layout></Route>
      <Route path='/task' exact><Layout buttonClick={buttonClick}><TasksPage/></Layout></Route>
      <Route path='/task/:id'><Layout buttonClick={buttonClick}><UpdateTasksPage/></Layout></Route>
    </>
  )
}

export default App