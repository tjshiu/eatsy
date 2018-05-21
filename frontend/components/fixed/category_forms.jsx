import React from "react";
import { withRouter } from "react-router-dom";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='category-nav-Container'>
      <nav className='category-nav'>
        <button onClick={() => this.props.category('Drink').then(this.props.history.push(`/category/Drinks`))}>
        Drinks
        </button>
        <button onClick={() => this.props.category('Breakfast').then(this.props.history.push(`/category/Breakfast`))}>
        Breakfast
        </button>
        <button onClick={() => this.props.category('Lunch').then(this.props.history.push(`/category/Lunch`))}>
        Lunch
        </button>
        <button onClick={() => this.props.category('Dinner').then(this.props.history.push(`/category/Dinner`))}>
        Dinner
        </button>
        <button onClick={() => this.props.category('Snack').then(this.props.history.push(`/category/Snacks`))}>
        Snacks
        </button>
        <button onClick={() => this.props.category('Dessert').then(this.props.history.push(`/category/Desserts`))}>
        Desserts
        </button>
      </nav>
    </div>
    );
  }
}

export default withRouter(CategoryForm);
