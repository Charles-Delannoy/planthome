import React, { useState, useContext } from 'react'
import { useMutation } from 'react-query'
import { SessionContext } from './contexts/SessionContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './shared/Header'
import Footer from './shared/Footer'

const Login = (props) => {
  const { handleLogin } = useContext(SessionContext)

  const loginMutation = useMutation( (user) => {
    return axios.post(`/login`, { user }, { withCredentials: true })
  }, { onSuccess: (response) => {
    if (response.data.logged_in) {
      handleLogin(response)
      redirect()
    } else {
      setErrors(response.data.errors)
    }
    },
    onError: (error) => {
      console.log('api errors:', error)
    }
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
      password: password
    }

    loginMutation.mutate(user)
  }

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
            or <Link to={{ pathname: "/signup", previous: props.history.location.previous }} >sign up</Link>
          </div>

        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login;
