import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ShowAllWorkouts from "./Components/ShowAllWorkouts";
import CreateNewWorkout from "./Components/CreateNewWorkout";
import OneWorkout from './Components/OneWorkout'
import EditWorkout from './Components/EditWorkout'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav>
          <ul>
          <Link><div>Interval Training</div></Link>
          <Link><div>Muscle-Focused Training</div></Link>
          <Link><div>Crossfit Training</div></Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={ShowAllWorkouts} />
          <Route exact path="/workout/:id" component={OneWorkout} />
          <Route exact path="/workouts/create" component={CreateNewWorkout} />
          <Route exact path="/workout/:id/edit" component={EditWorkout} />
        </Switch>
      </div>
    );

  }
}

export default App;
