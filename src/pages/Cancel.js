import { Link } from 'react-router-dom'

function Cancel () {
  return (
    <div className='container'>
      <h1>OUPS !</h1>
      <p>Le paiement n'est pas passé, veuillez réessayer</p>
      <Link to='workout'>
        <button>
          Réesseyer
        </button>
      </Link>
    </div>
  )
}

export default Cancel
