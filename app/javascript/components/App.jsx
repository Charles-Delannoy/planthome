import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import axios from 'axios'

const App = () => {
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

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
              { withCredentials: true })
         .then(response => {
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
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/home" exact element={<HomePage />} />
          <Route exact path='/login' component={ } />
          <Route exact path='/signup' component={ } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
