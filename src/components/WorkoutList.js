import React from 'react'
import WorkoutListItem from './WorkoutListItem'

function WorkoutList ({ workouts }) {
  if (!workouts || workouts.lenght < 1) {
    return (
      <p>Aucun entraînement</p>
    )
  } return (
    <div className='list-container'>
      {workouts.map(workout => {
        return (
        <WorkoutListItem key={workout._id} workout={workout} />
        )
      })}
    </div>
  )
}

export default WorkoutList
