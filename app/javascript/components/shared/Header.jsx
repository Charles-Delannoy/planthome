import React, { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'

const Header = () => {
  const { isLoggedIn, logout } = useContext(SessionContext)

  return (
    <div className='header'>
      <h1>Plant'Home</h1>
      {isLoggedIn && <a className='logout' onClick={logout} href="">Log out</a>}
    </div>
  )
}

export default Header
