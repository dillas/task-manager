import React from 'react'
import styles  from './Header.module.scss'


const Header = (title, button) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}><h2>{title}</h2></div>
      <div className={styles.button}>{button}</div>
    </div>
  )
}

export default Header