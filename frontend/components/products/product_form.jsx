import React from "react";

class ProductForm extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </label>
          <label>
            <textarea value={this.state.body} onChange={this.update("body")} />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default ProductForm;
