import React from 'react'
import { actionTypes, useCart } from '../contexts/CartContext'

function ExercicesListItem ({ exercice }) {
  const { dispatch } = useCart()
  const addToCart = () => {
    dispatch({
      type: actionTypes.ADD_ITEM_TO_CART,
      data: exercice
    })
  }
  // toFixed(2) est pour fixer à deux chiffres après la virgule
  return (
    <div className='exercice'>
      <h2>{exercice.name}</h2>
      <p>{exercice.description}</p>
      <p>{exercice.price}€</p>
      <button onClick={addToCart}>Ajouter au panier</button>
    </div>
  )
}

export default ExercicesListItem
