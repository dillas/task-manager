import React from 'react'
import Task from './Task'
import styles from './TaskList.module.scss'

const TaskList = ({data, deleteTask}) => {

  return (
    <div className={styles.list}>
      {data && data.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default TaskList