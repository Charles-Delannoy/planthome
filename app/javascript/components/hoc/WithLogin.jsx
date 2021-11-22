import React, { useEffect, useState, useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import { Redirect } from "react-router-dom"
import axios from 'axios'

const withLogin = (Component) => (props) => {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(SessionContext)

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
      { withCredentials: true })
      .then(response => {
        console.log(response)
        if (response.data.logged_in) {
          handleLogin(response)
        } else {
          handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  useEffect(() => {
    loginStatus();
  }, [])

  return (
    isLoggedIn ? <Component {...props} /> : <Redirect to={{pathname: "/login", previous: window.location.pathname}} />
  )
}

export default withLogin
