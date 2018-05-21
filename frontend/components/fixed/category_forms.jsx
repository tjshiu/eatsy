import React from "react";
import { withRouter } from "react-router-dom";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category-nav-Container">
        <nav className="category-nav">
          <button onClick={() => this.props.history.push(`/category/Drink`)}>
            Drinks
          </button>
          <button
            onClick={() => this.props.history.push(`/category/Breakfast`)}
          >
            Breakfast
          </button>
          <button onClick={() => this.props.history.push(`/category/Lunch`)}>
            Lunch
          </button>
          <button onClick={() => this.props.history.push(`/category/Dinner`)}>
            Dinner
          </button>
          <button onClick={() => this.props.history.push(`/category/Snack`)}>
            Snacks
          </button>
          <button onClick={() => this.props.history.push(`/category/Dessert`)}>
            Desserts
          </button>
        </nav>
      </div>
    );
  }
}

export default withRouter(CategoryForm);
