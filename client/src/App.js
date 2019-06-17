import React from 'react';
import './App.css';
import {Router} from 'react-router-dom'

class App extends Component {
constructor(props) {
  super(props)
}
  render() {
    return (
<div>PWR App


<Router to="/" component={LandingPage}></Router>
<Router to="/home" component={ShowAllWorkouts}></Router>
<Router to="/:id" component={OneWorkout}></Router>
<Router to="/" component={PersonalWorkoutRegimen}></Router>
</div>
    )
  }
}


export default App;
