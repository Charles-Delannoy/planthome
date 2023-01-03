import React, { useState, useEffect, useMemo } from 'react'
import { useQuery } from "react-query";
import Header from './shared/Header'
import Footer from './shared/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import SearchBar from './SearchBar'
import PlantsList from './PlantsList'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')

  const { data } = useQuery("repoData", () =>
    axios.get('/plants').then((res) => res.data.plants), { initialData: [] }
  );

  const sortByName = (listToSort) => {
    return listToSort.sort((a, b) => a.name.localeCompare(b.name))
  }

  const filteredPlants = sortByName(searchValue ? data.filter(
    plant => plant.name.toLowerCase().includes(searchValue.toLowerCase())
  ) : data)

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
        <PlantsList list={filteredPlants} />
      </div>
      <Footer />
    </>
  )
}

export default Search
