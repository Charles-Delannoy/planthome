import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    eval(`set${name}`)(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
  };

  return(
    <>
      <Header />
      <div className="home-content">
        <h1 className='main-title'>log in</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="Username"
            value={username}
            onChange={handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="Email"
            value={email}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="Password"
            value={password}
            onChange={handleChange}
          />
          <button placeholder="submit" type="submit">
            Log In
          </button>
          <div>
            or <Link to='/signup' params={props}>sign up</Link>
          </div>

        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login;
