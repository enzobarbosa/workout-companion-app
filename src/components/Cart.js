import { Link, useLocation } from 'react-router-dom'
import { actionTypes, useCart } from '../contexts/CartContext'
import Button from '@mui/material/Button';
import './styles/Cart.css'

function Cart () {
  const { state: { cart, total }, dispatch } = useCart()
  const location = useLocation()
  const removeItem = (item) => {
    console.log(item);
    dispatch({
      type: actionTypes.REMOVE_ITEM_FROM_CART,
      data: item
    })
  }
  // On affiche pas l'entraînement sur la page commande
  if (location.pathname.includes('workout')) {
    return null
  }
  // On affiche pas l'entraînement sur les pages de connexion
  if (location.pathname.includes('Auth')) {
    return null
  }

  return (
      <div className='cart-container'>
        <h2>Votre entraînement</h2>
        {
            cart.map(item => {
              return (
                <div key={item.exercice._id} className='item-container'>
                  <h4>{item.exercice.name}</h4>
                  <p>{item.quantity}x</p>
                  <p>{item.exercice.series}x</p>
                  <p>{item.exercice.repetitions}reps</p>
                  <p>{item.exercice.poids}Kg</p>
                  {/* <button onClick={() => removeItem(item)}>🗑️</button> */}
                  <Button size="small" onClick={() => removeItem(item)}>🗑️</Button>
                </div>
              )
            })
        }
        <h4>Total : {total} entraînements</h4>
        <Link to='/workout'>
          <button>
            Créer l'entraînement
          </button>
        </Link>
      </div>
  )
}

export default Cart
