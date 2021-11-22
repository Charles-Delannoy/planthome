import React, { createContext, useState } from 'react'

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (data) => {
    setIsLoggedIn(true)
    setUser(data.user)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser({})
  }

  return (
    <SessionContext.Provider value={ {
        handleLogin,
        handleLogout,
        user,
        isLoggedIn
      } }
    >
    { children }
    </SessionContext.Provider>
  )
}

export default SessionContextProvider
