import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import './editCSS.css'

class EditWorkout extends Component {
constructor(props) {
    super(props)

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
  
    componentDidMount = async () => {
        const response = await axios.get(
          `/workouts/category/${this.props.match.params.categoryId}/workouts/${this.props.match.params.id}`
        );
        const workout = response.data.oneworkout

        this.setState({
          description: workout.description,
          name: workout.name,
          difficulty: workout.difficulty,
          duration: workout.duration,
          youtube_url: workout.youtube_url
        });
      };

    async handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      })
      }


      handleOptionChange = (event)=> {
        this.setState({difficulty: event.target.value});
      }
    
      async handleSubmit(event) {
      event.preventDefault();
      await axios.put(`/workouts/category/${this.props.match.params.categoryId}/workouts/${this.props.match.params.id}`, {

        name: this.state.name,
        description: this.state.description,
        difficulty: this.state.difficulty,
        duration: this.state.duration,
        youtube_url: this.state.youtube_url
      })
      this.setState({
        redirect: true
      })
      }
      
    render() {
        return (
            <div id="editPageImage">
          {this.state.redirect ? <Redirect to={`/category/${this.props.match.params.categoryId}`}/> : null}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          
         
        <img id="PWReditPage" alt="PWR" src="https://i.ibb.co/HnCbQ4y/PWR-transparant.png "></img>
 
       
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

          <select id="select"onChange={this.handleOptionChange} name="difficulty" type="text" value={this.state.difficulty}>

            <option>Easy</option>
            <option>Moderate</option>
            <option>Advanced</option>
          </select>
          <input id="duration" name="duration" type="integer" value={this.state.duration} />
          <input name="youtube_url" type="text" value={this.state.youtube_url}/>
          <br />
          <button id="submitButton" type="submit">Submit</button>
        </form>
      </div>
        )
    }
}

export default EditWorkout