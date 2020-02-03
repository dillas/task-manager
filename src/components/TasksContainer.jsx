import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksPage from './TasksPage'
import { getTasks, deleteTask, changeNewTaskField, createTask } from '../reducers/task-reducer'
import { openModal, closeModal } from '../reducers/app-reducer'

class TasksContainer extends Component {

  componentDidMount () {
    this.props.getTasks()
  }

  render () {

    const { tasks, deleteTask, newTaskName, modalIsOpen, changeNewTaskField, createTask, openModal, closeModal } = this.props

    return (
      <TasksPage tasks={tasks}
                 deleteTask={deleteTask}
                 changeNewTaskField={changeNewTaskField}
                 newTaskName={newTaskName}
                 createTask={createTask}
                 modalIsOpen={modalIsOpen}
                 openModal={openModal}
                 closeModal={closeModal}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.items,
    newTaskName: state.tasks.newTaskName,
    modalIsOpen: state.app.modalIsOpen
  }
}

export default connect(mapStateToProps, { getTasks, deleteTask, changeNewTaskField, openModal, closeModal, createTask })(TasksContainer)