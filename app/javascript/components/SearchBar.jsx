import React, { useState } from 'react'

const SearchBar = ({ value, setValue }) => {

  const onInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <input value={value} onChange={onInputChange} />
  )
}

export default SearchBar
