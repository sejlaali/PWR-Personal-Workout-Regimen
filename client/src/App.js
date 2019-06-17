import React from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props)
}
  render() {
    return (
<div>PWR App


<Router to="/" component={LandingPage}></Router>
<Router to="/home" component={ShowAllWorkout}></Router>
</div>
    )
  }
}


export default App;
