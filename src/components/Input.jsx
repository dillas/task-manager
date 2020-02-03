import React from 'react'
import styles from './Input.module.scss'

const Input = ({label, error, value, handleChange}) => {
  return (
    <div className={`${styles.formField}`}>
      <label className={`${styles.formLabel}`}>
        {label}:
        <input className={`${styles.formInput}`} type="text" value={value} onChange={(e) => handleChange(e.target.value)} />
      </label>
      {error && <span className={`${styles.formError}`}>{error}</span>}
    </div>
  )
}

export default Input