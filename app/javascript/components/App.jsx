import React, { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import SessionContextProvider from './contexts/SessionContext'
import HomePage from './HomePage'
import Profile from './Profile'
import Search from './Search'
import Alert from './Alert'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import withLogin from './hoc/WithLogin'

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <SessionContextProvider>
        <Alert />
        <Router>
          <Switch>
            <Route path="/" exact component={ HomePage } />
            <Route
              path="/home" exact
              component={withLogin(props =>
                <Profile
                  handleLogin = { handleLogin }
                  handleLogout = { handleLogout }
                  {...props}
                />
              ) }
            />
            <Route exact path='/login' render={ props => <Login {...props} /> } />
            <Route exact path='/signup' render={ props => <Signup {...props} /> } />
            <Route exact path='/search' render={props => <Search {...props} />} />
          </Switch>
        </Router>
      </SessionContextProvider>
    </QueryClientProvider>
  )
}

export default App
