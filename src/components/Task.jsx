import React from 'react'
import PropTypes from 'prop-types'
import styles from './Task.module.scss'
import Button from './Button'
import { editIcon, deleteIcon } from './Icons'

const buttonClick = (text) => {
  console.log(text)
}

const Task = ({task}) => {
  return (
    <div className={styles.item}>
      <div className={styles.id}>{task.id}</div>
      <div className={styles.title}>{task.title}</div>
      <div className={styles.buttons}>
        <Button icon={editIcon} type='primary' handleClick={() => buttonClick('editIcon')} />
        <Button icon={deleteIcon} type='error' handleClick={() => buttonClick('editIcon')} />
      </div>
    </div>
  )
}

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
}

export default Task