import React from 'react'
import PropTypes from 'prop-types'

import { cancelIcon } from './Icons'
import styles from './Modal.module.scss'
import Portal from './Portal'
import Button from './Button'

/*const Modal1 = ({ title, children, onRequestClose }) => {
  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.panel}>
          <div className={styles.head}>
            <h2>{title}</h2>
            <Button onClick={onRequestClose} className={styles.closeButton} >X</Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}*/

const Modal = ({ title, isOpen, onCancel, onSubmit, children}) => {
  return (
    <>
      {isOpen &&
      <Portal>
        <div className={styles.overlay}>
          <div className={styles.panel}>
            <div className={styles.head}>
              <h2 className="modalTitle">{title}</h2>
              <Button onClick={onCancel}>{cancelIcon}</Button>
            </div>
            <div className="modalBody">
              {children}
            </div>
            {<div className="modalFooter">
              {/*<Button onClick={onCancel}>Cancel</Button>*/}
              {/*<Button onClick={onSubmit}>Submit</Button>*/}
            </div>}
          </div>
        </div>
      </Portal>
      }
    </>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node
}

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null
}

export default Modal