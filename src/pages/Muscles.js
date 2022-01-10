import React from 'react';
import MuscleList from '../components/MuscleList';
import { getMuscles } from '../services/api'

class Muscles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            muscles: []
        };
      }

    componentDidMount() {
          this.getData()
    }

    getData = async () => {
        const muscles = await getMuscles()
        this.setState({muscles}) 
    }

  render() {
    return (
        <div>
            <MuscleList 
                muscles={this.state.muscles} 
            />
        </div>
    )
  }
}

export default Muscles;