import React from 'react'
import './App.module.scss'
import Layout from './components/Layout'
import { Route } from 'react-router-dom'
import UpdateTasksPage from './components/UpdateTasksPage'
import MainPage from './components/MainPage'
import TasksContainer from './components/TasksContainer'

function App () {
  return (
    <>
      <Route path='/' exact><Layout><MainPage/></Layout></Route>
      <Route path='/tasks' exact><Layout><TasksContainer/></Layout></Route>
      <Route path='/task/:id'><Layout><UpdateTasksPage/></Layout></Route>
    </>
  )
}

export default App