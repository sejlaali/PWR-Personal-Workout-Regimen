import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

class OneCategory extends Component {
constructor(props) {
  super(props)

  this.state = {
    workoutsArray: []
  }
  // this.handleClick = this.handleClick.bind(this)
}
async componentDidMount() {
  const workouts = await axios.get(`http://localhost:3001/workouts/category/${this.props.match.params.id}`)
const workoutsArray = workouts.data.oneWorkout
this.setState({
  workoutsArray
})
}

// handleClick = async (e)=>{
//     e.preventDefault();
//     const result = await axios.put(`http://localhost:3001/workouts/category/${this.props.match.params.categoryId}/workouts/${this.props.match.params.id}`, {
//      regimen: true
//     })
  
    
// }
// /category/:categoryId/workouts/:id

  render() {
    console.log(this.state.workoutsArray);
    return (
      <div>
     
        
{this.state.workoutsArray.map(workout => 
  <div>
   <Link to={`/category/${workout.categoryId}/workout/${workout.id}/edit`}><h3>{workout.name}</h3></Link>
   <p>Description: {workout.description}</p>
   <p>Duration: {workout.duration}</p>
   <p>Difficulty: {workout.difficulty}</p>
   <button onClick={this.handleClick}> Add to PWR </button>
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