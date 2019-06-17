import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

class OneWorkout extends Component {
    constructor(props){
        super(props)

    this.state = {
        description: "",
        name: "",
        duration: 0,
        difficulty: "",
        redirect: false
      };
    }
  
    componentDidMount = async () => {
      const response = await axios.get(
        `http://localhost:3001/workouts/${this.props.match.params.id}`
      );
      const workoutObj = response.data.oneWorkOut
      this.setState({
        description: workoutObj.description,
        name: workoutObj.name,
        duration: workoutObj.duration,
        difficulty: workoutObj.difficulty,
      });
    };
  
    handleDelete = async () => {
      await axios.delete(`http://localhost:3001/workouts/${this.props.match.params.id}`);
      this.setState({
        redirect: true
      })
    };

    render() {
        return (
            <div>
      {this.state.redirect ? <Redirect to="/home"/> : null}
        <p>Name: {this.state.name}</p>
        <p>Description: {this.state.description}</p>
        <p>Difficulty: {this.state.difficulty}</p>
        <p>Duration: {this.state.duration} minutes</p>
        <Link to={`/workouts/${this.props.match.params.id}/edit`}><button>EDIT</button></Link>
        <button onClick={this.handleDelete}>DELETE</button>
        </div>
        )
    }
}

export default OneWorkout;