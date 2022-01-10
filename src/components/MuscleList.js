import React from 'react'
import MuscleListItem from './MuscleListItem'

class MuscleList extends React.Component {
  render () {
    if (!this.props.muscles) {
      return (
        <p>Aucun muscle</p>
      )
    }
    return (
      <div>
        {this.props.muscles.map((muscle) => {
          return <MuscleListItem {... this.props} key={muscle._id} muscle={muscle} />
        })}
      </div>
    )
  }
}

export default MuscleList
