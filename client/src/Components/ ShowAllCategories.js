import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ShowAllCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesArray: []
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/workouts");
    const workoutsArray = response.data.workOuts;
    this.setState({
      categoriesArray
    });
  }

  render() {
    return (
      <div>
        {this.state.categoriesArray.map(category => (
          <Link className="link" key={category.id} to={`/category/${category.id}`}>
            <p>{category.title}</p>
          </Link>
        ))}

        <Link to="/workouts/create">
          <button>Create a new workout</button>
        </Link>
      </div>
    );
  }
}

export default ShowAllCategories;
