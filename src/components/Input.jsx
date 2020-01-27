import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({label, error, value, handleChange}) => {
  return (
    <div className={`${styles.formField}`}>
      <label className={`${styles.formLabel}`}>
        {label}:
        <input className={`${styles.formInput}`} type="text" value={value} onChange={handleChange} />
      </label>
      {error && <span className={`${styles.formError}`}>{error}</span>}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string
}

export default Input