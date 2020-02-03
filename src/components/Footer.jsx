import React from 'react'
import styles from './Footer.module.scss'
import { Link, withRouter } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className={styles.footer} >
      <div><p className={styles.copyright}>© 2020 Dillas</p></div>
      {props.match.path !== '/' && <div><Link className={styles.nav} to='/'>Главня</Link></div> }
    </div>
  )
}

export default withRouter(Footer)