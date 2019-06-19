import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import PersonalWorkoutRegimen from './PersonalWorkoutRegimen';

class OneCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutsArray: []
    };
  }
  async componentDidMount() {
    const workouts = await axios.get(
      `http://localhost:3001/workouts/category/${this.props.match.params.id}`
    );
    const workoutsArray = workouts.data.oneWorkout;
    this.setState({
      workoutsArray
    });
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

handleClick = async (id) => {
    await axios.put(`http://localhost:3001/workouts/regimen/${id}`, {
     regimen: true
    })   
}
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
   <button onClick={this.handleClick(workout.id)}> Add to PWR </button>
  </div>
)}

<Link to={`/workouts/create/${this.props.match.params.id}`}>
          <button>Create a new workout</button>
        </Link>
        <PersonalWorkoutRegimen />
      </div>
    );
  }

export default OneCategory;