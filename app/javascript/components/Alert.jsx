import React, { useContext, useState, useEffect } from 'react'
import { SessionContext } from './contexts/SessionContext'

const Alert = () => {
  const { alertMessage, displayAlert } = useContext(SessionContext)
  const [display, setDisplay] = useState(displayAlert)

  useEffect(() => {
    setDisplay(displayAlert)
  }, [alertMessage])

  const onButtonClick = (e) =>{
    e.preventDefault()
    setDisplay('none')
  }

  return (
    <div className='alert alert-info' style={{ 'display': display }}>
      <p>{alertMessage}</p>
      <button onClick={(e) => onButtonClick(e)}>X</button>
    </div>
  )
}

export default Alert
