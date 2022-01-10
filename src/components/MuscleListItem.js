import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Muscle.css'

class MuscleListItem extends React.Component {
  render () {
    const { muscle } = this.props
    if (!muscle) {
      return <p>Pas de muscles</p>
    }
    return (
      <Link to={`/muscle/${muscle._id}`}>
        <div className='muscle'>
          {muscle.Photos &&
            <div className='image'><img src={`https://strapi.myidea.fr${muscle.Photos[0].url}`} /></div>}
          <h2 className='titre'>{muscle.name}</h2>
          <p className='description'>{muscle.description}</p>
        </div>
      </Link>
    )
  }
}

export default MuscleListItem
