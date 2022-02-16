import React from 'react';
import ExerciceList from '../components/ExercicesList';
import { getExercices } from '../services/api'

class Exercices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercices: []
        };
      }

    componentDidMount() {
          this.getData()
    }

    getData = async () => {
        const exercices = await getExercices()
        this.setState({exercices}) 
    }

  render() {
    return (
        <div>
            <ExerciceList 
                exercices={this.state.exercices} 
            />
        </div>
    )
  }
}

export default Exercices;