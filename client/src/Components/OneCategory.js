import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import PersonalWorkoutRegimen from "./PersonalWorkoutRegimen";
import './PWR.css'

class OneCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutsArray: [],
      regimenArray: []
    };
  }

   componentDidMount() {
     this.getWorkouts()
  }

  getWorkouts = async () => {
    const workouts = await axios.get(
      `http://localhost:3001/workouts/category/${this.props.match.params.id}`
    );
    const workoutsArray = workouts.data.oneWorkout;
    this.setState({
      workoutsArray
    });
  }

  handleClick = async (id) => {
    await axios.put(`http://localhost:3001/workouts/regimen/${id}`, {
      regimen: true
    });
    this.getWorkouts();
    this.getRegimen();
  };

  getRegimen = async () => {
    const result = await axios.get(
      `http://localhost:3001/workouts/regimen/true`
    );
    const regimenArray = result.data.result;
    this.setState({
      regimenArray
    });
  }

  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <h1>PWR<span>Personal Workout Regimen</span></h1>

        {this.state.workoutsArray.map((workout) => (
          <div className="one-category">
            <Link className="link"
              to={`/category/${workout.categoryId}/workout/${workout.id}/edit`}
            >
              <h3 className="workout-name">{workout.name}</h3>
            </Link>
            <div className="workout-container">
            <p className="workout">Description: {workout.description}</p>
            <p className="workout">Duration: {workout.duration}</p>
            <p className="workout">Difficulty: {workout.difficulty}</p>
            <button className="delete" onClick={() => {this.handleClick(workout.id)}}> Add to PWR </button>
           <hr/>
            </div>
          </div>
        ))}

        <Link to={`/workouts/create/${this.props.match.params.id}`}>
          <button>Create a new workout</button>
        </Link>
        <PersonalWorkoutRegimen getWorkouts={this.getWorkouts} getRegimen={this.getRegimen} regimenArray={this.state.regimenArray}/>
      </div>
    );
  }
}

export default OneCategory;
