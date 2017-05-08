import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCategory } from '../actions/players';
import CATEGORIES from '../constants/categories';
import CategoriesBasic from '../components/categories_basic';

class Categories extends Component {
  render() {
    return (
      <CategoriesBasic 
        categories={ CATEGORIES }
        renderedCategories={ this.props.renderedCategories }
        handleToggle={ this.props.toggleCategory }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    renderedCategories: state.players.renderedCategories
  };
}

export default connect(mapStateToProps, { toggleCategory })(Categories);
