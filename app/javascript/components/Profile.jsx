import React, { useState, useContext } from 'react'
import { SessionContext } from './contexts/SessionContext'
import Header from './shared/Header'
import Footer from './shared/Footer'

const Profile = () => {
  const { user } = useContext(SessionContext)

  return (
    <>
      <Header />
      <div className="home-content">
        <h1 className='main-title'>Hello { user?.username }</h1>
        <p>Your registered email: {user?.email }</p>
      </div>
      <Footer />
    </>
  )
}

export default Profile
