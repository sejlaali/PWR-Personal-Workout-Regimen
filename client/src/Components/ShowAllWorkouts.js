import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ShowAllWorkouts extends Component {
    constructor(props){
        super(props)

        this.state = {
            workoutsArray: []
        }
    }

    async componentDidMount() {
        const response = await axios.get(//INSERT LINK HERE
        );
        const workoutsArray = response.data;
        this.setState({
            workoutsArray
        })
    }

render() {
return (
    <div>
I show all the workouts!!
{this.state.workoutsArray.map(workout => (
    <Link key={workout.id} to={`/workout/${workout.id}`}><h3>{workout.name}</h3></Link>
))}

<Link to="/workouts/create">
    <button>Create a new workout</button>
</Link>
    </div>
)
}
}

export default ShowAllWorkouts;
