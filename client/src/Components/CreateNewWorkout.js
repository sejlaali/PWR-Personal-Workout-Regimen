import React, { Component } from "react";
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import './CNW.css'

class CreateNewWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      difficulty: "",
      duration: 0,
      youtube_url: ""
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
    }
  
    async handleSubmit(event) {
    event.preventDefault();
    await axios.post(`http://localhost:3001/workouts/category/${this.props.match.params.categoryId}/workouts`, {
      name: this.state.name,
      description: this.state.description,
      difficulty: this.state.difficulty,
      duration: this.state.duration,
      categoryId: this.props.match.params.categoryId,
      youtube_url: this.state.youtube_url
    })
    this.setState({
      redirect: true
    })
    }
  

  render() {
      return (
          <div>
          {this.state.redirect ? <Redirect to={`/category/${this.props.match.params.categoryId}`}/> : null}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Workout Name"
            value={this.state.name}
          />
          <input
            name="description"
            type="textarea"
            placeholder="Description"
            value={this.state.description}
          />
          <select onClick={this.handleChange} onSubmit={this.handleSubmit} name="difficulty" type="text" value={this.state.difficulty}>
            <option>Easy</option>
            <option>Intermediate</option> 
            <option>Advanced</option>
          </select>
          <input name="duration" type="integer" value={this.state.duration} />
          <input name="youtube_url" type="text" placeholder="Youtube URL" value={this.state.youtube_url} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateNewWorkout;
