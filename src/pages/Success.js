import { useEffect, useState } from 'react'
import { useCart, actionTypes } from '../contexts/CartContext'
import { createWorkout } from '../services/api'

function Success () {
  const [loading, setLoading] = useState(true)
  const [workout, setWorkout] = useState(null)

  const {
    state: { cart },
    dispatch
  } = useCart()

  useEffect(() => {
    // Appel d'api pour enregistrer dans la commande
    const sendWorkout = async () => {
      const user = JSON.parse(window.localStorage.getItem('WORKOUT_USER'))
      const result = await createWorkout(user, cart)
      if (result && result._id) {
        setWorkout(result)
        if (cart.length > 0) {
          // Vider le panier
          dispatch({ type: actionTypes.RESET_CART })
          window.localStorage.removeItem('WORKOUT_USER')
        }
        setLoading(false)
      }
    }
    if (window.localStorage.getItem('WORKOUT_USER')) {
      sendWorkout()
    }
  }, [])

  if (!window.localStorage.getItem('WORKOUT_USER') && !workout) {
    return <h1>Ya rien là zebi</h1>
  }
  if (loading) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <h1>Merci, votre commande a été passée avec succès !</h1>
      <p>ID de commande : {workout && workout._id}</p>
    </>
  )
}

export default Success
