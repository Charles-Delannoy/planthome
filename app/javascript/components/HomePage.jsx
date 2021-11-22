import React, { useContext } from 'react'
import { SessionContext } from './contexts/SessionContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'

const HomePage = () => {
  const { handleLogin, handleLogout, isLoggedIn } = useContext(SessionContext)

  const Logout = (event) => {
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
    <>
      <Header />
      <div className="home-content">
        {isLoggedIn && <a onClick={Logout} href="">Log out</a>}
      </div>
      <Footer />
    </>
  )
}

export default HomePage
