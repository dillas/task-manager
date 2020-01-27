import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({icon, classname, label, type, handleClick}) => {
  return (
    <button
      className={`${styles.btn} ${classname} ${styles[type]}`}
      onClick={handleClick}
    >
       {label}  {icon}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.oneOf(['primary', 'secondary', 'error']),
  handleClick: PropTypes.func
}

export default Button