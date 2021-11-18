import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTint, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/home' className='menu-btn'><FontAwesomeIcon icon={faHome} /></Link>
      <div className='menu-btn'><FontAwesomeIcon icon={faSearch} /></div>
      <div className='menu-btn'><FontAwesomeIcon icon={faPagelines} /></div>
      <div className='menu-btn'><FontAwesomeIcon icon={faTint} /></div>
    </div>
  )
}

export default Footer
