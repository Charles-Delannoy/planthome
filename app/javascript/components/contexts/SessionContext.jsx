import React, { createContext, useState } from 'react'
import axios from 'axios'

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')
  const [displayAlert, setDisplayAlert] = useState('none')
  const [loaded, setLoaded] = useState(false)

  const updateStatus = (logStatus, user, message) => {
    setIsLoggedIn(logStatus)
    setUser(user)
    setAlertMessage(message)
    setDisplayAlert('flex')
    setLoaded(true)
  }

  const handleLogin = response => { updateStatus(true, response.data.user, 'Vous êtes connecté !') }

  const handleLogout = () => { updateStatus(false, {}, 'Déconnexion réussie !') }

  const logout = (event) => {
    event.preventDefault()
    axios.post(`/logout`)
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response)
        } else {
          handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  return (
    <SessionContext.Provider value={ {
        handleLogin,
        handleLogout,
        user,
        alertMessage,
        displayAlert,
        isLoggedIn,
        logout,
        loaded
      } }
    >
    { children }
    </SessionContext.Provider>
  )
}

export default SessionContextProvider
