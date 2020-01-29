import React from 'react'
import Task from './Task'
import styles from './TaskList.module.scss'

const TaskList = ({data}) => {

  return (
    <div className={styles.list}>
      {data && data.items.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList