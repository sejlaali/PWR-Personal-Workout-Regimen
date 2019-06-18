import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

class OneCategory extends Component {
constructor(props) {
  super(props)

  this.state = {
    workoutsArray: []
  }
}
async componentDidMount() {
  const workouts = await axios.get(`http://localhost:3001/workouts/category/${this.props.match.params.id}`)
const workoutsArray = workouts.data.oneWorkout
this.setState({
  workoutsArray
})
}

  render() {
    return (
      <div>
{this.state.workoutsArray.map(workout => 
  <div>
   <Link to={`/category/${workout.categoryId}/workout/${workout.id}/edit`}><h3>{workout.name}</h3></Link>
   <p>Description: {workout.description}</p>
   <p>Duration: {workout.duration}</p>
   <p>Difficulty: {workout.difficulty}</p>
  </div>
)}

<Link to="/workouts/create">
          <button>Create a new workout</button>
        </Link>
      </div>
    )
  }
}

export default OneCategory