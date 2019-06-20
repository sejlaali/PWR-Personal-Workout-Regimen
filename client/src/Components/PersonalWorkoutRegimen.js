import React, { Component } from "react";
import axios from "axios";
import './PWR.css'

export default class PersonalWorkoutRegimen extends Component {
  constructor(props) {
    super(props)

  }

   componentDidMount() {
    this.props.getRegimen();
  }

  handleClick = async (id) => {
    await axios.put(`http://localhost:3001/workouts/regimen/${id}`, {
      regimen: false
    });
    this.props.getWorkouts()
    this.props.getRegimen()
  }

  render() {
    return (
      <div className="personal-workout-regimen">
    {this.props.regimenArray.length === 0 ? <div>Personal Workout Regimen is designed to replace your paper workout journal. Add exercises of your choice  to build your own personal PWR.</div> : null}
        {this.props.regimenArray.map((workout) => (
          <div>
            <h3 className="pwr-workout">{workout.name}</h3>
            <p className="pwr-workouts">Description: {workout.description}</p>
            <p className="pwr-workouts">Duration: {workout.duration}</p>
            <p className="pwr-workouts">Difficulty: {workout.difficulty}</p>
            <i class="fas fa-minus-circle" onClick={() => {this.handleClick(workout.id)}}></i>
            {/* <button onClick={() => {this.handleClick(workout.id)}}> */}
              {/* Delete from PWR
            </button> */}
            {/* <i class="fas fa-minus-circle"></i> */}
           <hr/>
          </div>
        ))}
      </div>
    )
  }
}
