import React from 'react'
import Button from './Button'
import { cancelIcon } from './Icons'
import styles from './Modal.module.scss'

const Modal = ({ title, children, onRequestClose }) => {
  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.panel}>
          <div className={styles.head}>
            <h2>{title}</h2>
            <Button classname={styles.closeButton} icon={cancelIcon}
                    handleClick={onRequestClose}/>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal