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
      regimenArray: [],
      redirect: false
    };
  }

   componentDidMount() {
     this.getWorkouts()
  }

  getWorkouts = async () => {
    const workouts = await axios.get(
      `/workouts/category/${this.props.match.params.id}`
    );
    const workoutsArray = workouts.data.oneWorkout;
    this.setState({
      workoutsArray
    });
  }

  handleClick = async (id) => {
    await axios.put(`/workouts/regimen/${id}`, {
      regimen: true
    });
    this.getWorkouts();
    this.getRegimen();
  };

  getRegimen = async () => {
    const result = await axios.get(
      `/workouts/regimen/true`
    );
    const regimenArray = result.data.result;
    this.setState({
      regimenArray
    });
  }

  handleRedirect = () => {this.setState({
    redirect: true})
  }

  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
      {this.state.redirect ? <Redirect to='/home'/> : null}
        <div className="category-pwr-logo" onClick={this.handleRedirect}>
          
        <img id="PWR2" alt="PWR" src="https://i.ibb.co/LvvkrRr/PWR-ready.png "></img>
          
          <h4 id="PWR3">Personal Workout Regimen</h4></div>

        {this.state.workoutsArray.map((workout) => (
          <div className="one-category">
            <Link className="link"
              to={`/category/${workout.categoryId}/workout/${workout.id}/edit`}
            >
              <h3 className="workout-name">{workout.name}</h3>
            </Link>
            <div className="workout-container">
            <p className="workout">{workout.description}</p>
            <p className="workout">Duration: {workout.duration} min</p>
            <p className="workout">Difficulty: {workout.difficulty}</p>
            <iframe width="400" height="250" src={`${workout.youtube_url}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media" allowfullscreen></iframe>
            <i className="add fas fa-plus" onClick={() => {this.handleClick(workout.id)}}></i>
           <hr/>
            </div>
          </div>
        ))}

        <Link to={`/workouts/create/${this.props.match.params.id}`}>
          <button id="createButton">Create a new workout</button>
        </Link>
        <PersonalWorkoutRegimen getWorkouts={this.getWorkouts} getRegimen={this.getRegimen} regimenArray={this.state.regimenArray}/>
      </div>
    );
  }
}

export default OneCategory;
