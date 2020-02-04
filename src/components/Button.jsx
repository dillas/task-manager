import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, onClick, className, disabled, active, btnType, ...attrs }) => {

  const classes = classNames(
    styles.btn,
    styles[btnType],
    className,
    { active }
  )

  const onClickActon = e => {
    if (disabled) {
      e.preventDefault()
    } else {
      return onClick(e)
    }
  }

  const Tag = attrs.href ? 'a' : 'button'

  return (
    <Tag
      {...attrs}
      className={classes}
      disabled={disabled}
      onClick={onClickActon}
    >{children}
    </Tag>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  btnType: PropTypes.oneOf(['primary', 'secondary', 'error'])
}

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
  btnType: null
}

export default Button

// const Button1 = ({icon, classname, label, type, handleClick = () => {}}) => {
//
//   const buttonClick = (e) => {
//     e.preventDefault()
//     handleClick()
//   }
//
//   return (
//     <button
//       type='submit'
//       className={`${styles.btn} ${classname} ${styles[type]}`}
//       onClick={(e) => buttonClick(e)}
//     >
//        {label}  {icon}
//     </button>
//   )
// }
