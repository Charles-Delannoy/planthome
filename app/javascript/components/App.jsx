import React from 'react'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/home" exact element={<HomePage />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
