import React from 'react'
import { Link } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home-content">
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
      <Footer />
    </>
  )
}

export default HomePage
