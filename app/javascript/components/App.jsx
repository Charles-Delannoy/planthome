import React, { useEffect, useState } from 'react'
import SessionContextProvider from './contexts/SessionContext'
import HomePage from './HomePage'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import withLogin from './hoc/WithLogin'

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

  return (
    <SessionContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={ HomePage } />
          <Route
            path="/home" exact
            component={withLogin(props =>
              <HomePage
                handleLogin = { handleLogin }
                handleLogout = { handleLogout }
                {...props}
              />
            ) }
          />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
        </Switch>
      </Router>
    </SessionContextProvider>
  )
}

export default App
