import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTint, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className='footer'>
      <div className='menu-btn'><FontAwesomeIcon icon={faHome} /></div>
      <div className='menu-btn'><FontAwesomeIcon icon={faSearch} /></div>
      <div className='menu-btn'><FontAwesomeIcon icon={faPagelines} /></div>
      <div className='menu-btn'><FontAwesomeIcon icon={faTint} /></div>
    </div>
  )
}

export default Header
