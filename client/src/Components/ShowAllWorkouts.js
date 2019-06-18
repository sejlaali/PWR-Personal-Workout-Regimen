import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ShowAllWorkouts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutsArray: []
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/workouts");
    const workoutsArray = response.data.workOuts;
    this.setState({
      workoutsArray
    });
  }

  render() {
    return (
      <div>
        {this.state.workoutsArray.map(workout => (
          <Link className="link" key={workout.id} to={`/workout/${workout.id}`}>
            <p>{workout.name}</p>
          </Link>
        ))}

        <Link to="/workouts/create">
          <button>Create a new workout</button>
        </Link>
      </div>
    );
  }
}

export default ShowAllWorkouts;
