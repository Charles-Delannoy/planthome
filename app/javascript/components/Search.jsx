import React, { useState, useContext, useEffect } from 'react'
import { SessionContext } from './contexts/SessionContext'
import Header from './shared/Header'
import Footer from './shared/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Search = () => {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    axios.get('/plants')
      .then(response => {
        setPlants(response.data.plants)
      })
  })

  const display_plants = plants.map((plant) => {
    return (
    <div key= {plant.id} className='plant-card'>
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
    </div>
    )
  })

  return (
    <>
      <Header />
      <div className="home-content">
        <h1 className='main-title'>Search a plant</h1>
        <div className='search-bar'>
          <input></input>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        {display_plants}
      </div>
      <Footer />
    </>
  )
}

export default Search
