import { useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutResume from '../components/WorkoutResume'
import { useCart } from '../contexts/CartContext'
import { createPaymentSession } from '../services/api'
import { useAuth } from '../contexts/AuthContext'

function Workout () {
  const { state: { cart, total } } = useCart()
  const { state: { user } } = useAuth()
  const [formData, setFormData] = useState({
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
    address: user ? user.address : ''
  })

  // const handlePayment = async (e) => {
  //   e.preventDefault()
  //   // On enregistre les infos de l'utilisateur dans le localstorage pour les réutiliser
  //   window.localStorage.setItem('WORKOUT_USER', JSON.stringify(formData))
  //   const result = await createPaymentSession(cart, formData)
  //   if (result && result.url) {
  //     window.location = result.url
  //   }
  // }

  return (
    <div>
      <WorkoutResume cart={cart} total={total} />
      <WorkoutForm data={formData} onChange={setFormData} />
      <button disabled={cart.lenght < 1}>  
      {/* onClick={handlePayment} */}
        Commander maintenant
      </button>
    </div>
  )
}

export default Workout
