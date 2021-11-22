import React, { useState, useContext } from 'react';
import { SessionContext } from './contexts/SessionContext'
import axios from 'axios'
import Header from './shared/Header'
import Footer from './shared/Footer'

const Signup = (props) => {
  const { handleLogin } = useContext(SessionContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    eval(`set${name}`)(value)
  };

  const redirect = () => {
    props.history.push(props.history.location.previous)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }
    axios.post(`/users`, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          handleLogin(response.data)
          redirect()
        } else {
          setErrors(response.data.errors)
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  return(
    <>
      <Header />
      <div className="home-content">
        <h1 className='main-title'>Sign Up</h1>
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
          <input
            placeholder="password confirmation"
            type="password"
            name="PasswordConfirmation"
            value={passwordConfirmation}
            onChange={handleChange}
          />

          <button placeholder="submit" type="submit">
            Sign Up
          </button>

        </form>
      </div>
      <Footer />
    </>
  )
}

export default Signup;
