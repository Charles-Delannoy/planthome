import React, { useState, useEffect } from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import SearchBar from './SearchBar'

const Search = () => {
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState(plants)
  const [loaded, setLoaded] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const sortByName = (listToSort) => {
    listToSort.sort((a, b) => a.name.localeCompare(b.name))
  }

  const updatePlants = () => {
    setFilteredPlants(
      plants.filter(
        plant => plant.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    )
  }

  useEffect(() => {
    const retrievePlants = async () => {
      if (!loaded) {
        const response = await axios.get('/plants')
        sortByName(response.data.plants)
        setPlants(response.data.plants)
        setFilteredPlants(response.data.plants)
        setLoaded(true)
      }
    }
    retrievePlants()
  })

  useEffect(() => {
    updatePlants()
    console.log(filteredPlants)
  }, [searchValue])

  const display_plants = filteredPlants.map((plant) => {
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
          <SearchBar
            value={searchValue}
            setValue={setSearchValue}>
          </SearchBar>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        {display_plants}
      </div>
      <Footer />
    </>
  )
}

export default Search
