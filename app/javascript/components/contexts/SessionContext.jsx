import React, { createContext, useState } from 'react'

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')
  const [displayAlert, setDisplayAlert] = useState('none')

  const updateStatus = (logStatus, user, message) => {
    setIsLoggedIn(logStatus)
    setUser(user)
    setAlertMessage(message)
    setDisplayAlert('flex')
  }

  const handleLogin = data => { updateStatus(true, data.user, 'Vous êtes connecté !') }

  const handleLogout = () => { updateStatus(false, {}, 'Déconnexion réussie !') }

  return (
    <SessionContext.Provider value={ {
        handleLogin,
        handleLogout,
        user,
        alertMessage,
        displayAlert,
        isLoggedIn
      } }
    >
    { children }
    </SessionContext.Provider>
  )
}

export default SessionContextProvider
