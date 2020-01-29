import React from 'react'
import styles from './Layout.module.scss'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout