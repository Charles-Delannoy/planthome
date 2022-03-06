import React, { useState, useEffect, useMemo } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Header from './shared/Header'
import Footer from './shared/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import SearchBar from './SearchBar'
import PlantsList from './PlantsList'

const queryClient = new QueryClient();

const Search = () => {
  const [searchValue, setSearchValue] = useState('')

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
        <QueryClientProvider client={queryClient}>
          <DisplayPlants searchValue={searchValue}/>
        </QueryClientProvider>
      </div>
      <Footer />
    </>
  )
}

const DisplayPlants = ({ searchValue }) => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get('/plants').then((res) => res.data.plants)
  );

  const sortByName = (listToSort) => {
    return listToSort.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <PlantsList list={ sortByName(searchValue ? data.filter(
      plant => plant.name.toLowerCase().includes(searchValue.toLowerCase())
    ) : data) } />
  )
}

export default Search
