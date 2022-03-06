import React from 'react'

const PlantsList = ({ list }) => {
  return (
    list.map((plant) => {
      return (
        <div key={plant.id} className='plant-card'>
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
        </div>
      )
    })
  )
}

export default PlantsList
