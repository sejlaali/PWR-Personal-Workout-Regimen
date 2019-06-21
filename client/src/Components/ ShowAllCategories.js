import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './PWR.css'
class ShowAllCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesArray: []
    };
  }

  async componentDidMount() {
    const response = await axios.get("/workouts");
    const categoriesArray = response.data.workOuts;
    this.setState({
      categoriesArray
    });
  }

  render() {
    return (
      
      <div className="categories">
        {this.state.categoriesArray.map(category => (
                 
          <Link className="link" key={category.id} to={`/category/${category.id}`}>
            <div style={{background: `url(${category.background_url})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '49% 0'}} className="category-title"><p>{category.title}</p></div>
          </Link>
        ))}
      </div>
    );
  }
}


export default ShowAllCategories;
