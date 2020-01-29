import React from 'react'
import './App.module.scss'
import Layout from './components/Layout'

const buttonClick = (text) => {
  console.log(text)
}

function App () {
  return (
    <Layout buttonClick={buttonClick}>
      App
    </Layout>
  )
}

export default App