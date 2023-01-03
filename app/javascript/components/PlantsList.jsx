import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const PlantsList = ({ list }) => {
  return (
    list.map((plant) => {
      return (
        <div key={plant.id} className='plant-card'>
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <button className='add-btn'><FontAwesomeIcon icon={faPlus} /></button>
        </div>
      )
    })
  )
}

export default PlantsList
