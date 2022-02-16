import { useState } from 'react'
import WorkoutResume from '../components/WorkoutResume'
import { useCart } from '../contexts/CartContext'
import { useAuth } from '../contexts/AuthContext'

function Workout () {
  const { state: { cart, total } } = useCart()
  const { state: { user } } = useAuth()

  return (
    <div>
      <WorkoutResume cart={cart} total={total} />
      <button disabled={cart.lenght < 1}>  
        Créer l'entraînement
      </button>
    </div>
  )
}

export default Workout
