import React from 'react'
import ExercicesListItem from './ExercicesListItem'

function ExercicesList ({ exercices }) {
  console.log(exercices)
  if (!exercices || exercices.lenght < 1) {
    return (
      <p>Aucun exercices</p>
    )
  } return (
    <div className='list-container'>
      {exercices.map(dish => {
        return (
          <ExercicesListItem key={exercice._id} exercice={exercice} />
        )
      })}
    </div>
  )
}

export default ExercicesList
