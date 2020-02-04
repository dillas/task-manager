import React from 'react'
import styles from './Input.module.scss'

const Input = ({label, error, value, onChange}) => {

  const onChangeInput = (e) => {
    console.log(e.target)
    onChange(e.target.value)
  }

  return (
    <div className={`${styles.formField}`}>
      <label className={`${styles.formLabel}`}>
        {label}:
        <input className={`${styles.formInput}`} type="text" value={value} onChange={onChangeInput} />
      </label>
      {error && <span className={`${styles.formError}`}>{error}</span>}
    </div>
  )
}

export default Input