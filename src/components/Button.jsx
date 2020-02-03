import React from 'react'
import styles from './Button.module.scss'

const Button = ({icon, classname, label, type, handleClick = () => {}}) => {

  const buttonClick = (e) => {
    e.preventDefault()
    handleClick()
  }

  return (
    <button
      type='submit'
      className={`${styles.btn} ${classname} ${styles[type]}`}
      onClick={(e) => buttonClick(e)}
    >
       {label}  {icon}
    </button>
  )
}


export default Button