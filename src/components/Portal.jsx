import { useEffect } from 'react'
import * as ReactDOM from 'react-dom'

const Portal = props => {

  const el = document.createElement('div')

  useEffect(() => {

    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  })

  return ReactDOM.createPortal(props.children, el)
}

export default Portal