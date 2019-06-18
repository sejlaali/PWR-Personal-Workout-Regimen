import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ShowAllCategories from "./Components/ ShowAllCategories";
import CreateNewWorkout from "./Components/CreateNewWorkout";
import OneWorkout from './Components/OneWorkout'
import EditWorkout from './Components/EditWorkout'
import OneCategory from './Components/OneCategory'


class App extends Component {

  render() {
    return (

      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={ShowAllCategories} />
          <Route exact path="/category/:id" component={OneCategory} />
          <Route exact path="/category/workout/:id" component={OneWorkout} />
          <Route exact path="/workouts/create" component={CreateNewWorkout} />
          <Route exact path="/category/:categoryId/workout/:id/edit" component={EditWorkout} />
        </Switch>
      </div>
    );

  }
}

export default App;
