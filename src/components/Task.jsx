import React from 'react'
import styles from './Task.module.scss'
import Button from './Button'
import { editIcon, deleteIcon } from './Icons'
import { Link } from 'react-router-dom'


const Task = ({task, deleteTask}) => {


  return (
    <div className={styles.item}>
      <div className={styles.id}>{task.id}</div>
      <div className={styles.title}>{task.title}</div>
      <div className={styles.buttons}>
        <Link to={`task/${task.id}`}>
          <Button icon={editIcon} type='primary' />
        </Link>
        <Button icon={deleteIcon} type='error' handleClick={() => deleteTask(task.id)} />
      </div>
    </div>
  )
}

export default Task