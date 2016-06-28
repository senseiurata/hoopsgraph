import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/category';
import { toggleCategory } from '../actions/players';
import CATEGORIES from '../constants/categories';

class Categories extends Component {
  handleToggle(value) {
    this.props.toggleCategory(value);
  }

  render() {
    return (
      <div>
        <h5>Basic Stats</h5>

        {
          CATEGORIES.map((category) => {
            return <Category
              key={ category.id }
              handleToggle={ this.handleToggle.bind(this) }
              label={ category.name }
              checked={ this.props.renderedCategories[category.value] }
              value={ category.value }
            />
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    renderedCategories: state.players.renderedCategories
  };
}

export default connect(mapStateToProps, { toggleCategory })(Categories);
