import React, { Component } from "react";

class CreateNewWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      difficulty: "",
      duration: 0
    };
  }

  render() {
    return (
      <div>
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
          <select name="difficulty" type="text" value={this.state.difficulty}>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Advanced</option>
          </select>
          <input name="duration" type="integer" value={this.state.duration} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateNewWorkout;
