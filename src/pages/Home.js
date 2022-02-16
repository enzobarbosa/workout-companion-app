import React from 'react';
import WorkoutList from '../components/WorkoutList';
import { getWorkouts } from '../services/api'


class Acceuil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        };
      }

    componentDidMount() {
          this.getData()
    }

    getData = async () => {
        const workouts = await getWorkouts()
        this.setState({workouts}) 
    }

  render() {
    return (
        <div>
            <WorkoutList 
                workouts={this.state.workouts} 
            />
        </div>
    )
  }
}

export default Acceuil