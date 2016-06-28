import React, { Component } from 'react';

class Category extends Component {
  handleClick() {
    this.props.handleToggle(this.props.value);
  }

  render() {
    return (
      <div>
        <label onChange={ this.handleClick.bind(this) }>
          <input type="checkbox" checked={ this.props.checked ? 'checked' : '' }/>
          { this.props.label }
        </label>
      </div>
    );
  }
}

export default Category;