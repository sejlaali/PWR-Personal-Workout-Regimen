import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PersonalWorkoutRegimen extends Component {
  constructor(props) {
    super(props);

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
      <div>
        {this.props.regimenArray.map((workout) => (
          <div>
            <h3>{workout.name}</h3>
            <p>Description: {workout.description}</p>
            <p>Duration: {workout.duration}</p>
            <p>Difficulty: {workout.difficulty}</p>
            <button onClick={() => {this.handleClick(workout.id)}}>
              Delete from PWR
            </button>
          </div>
        ))}
      </div>
    )
  }
}
