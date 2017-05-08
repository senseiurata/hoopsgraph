import React from 'react';
import Category from '../components/category';

export default (props) => {
  return (
    <div className="rc-categories-basic">
      <h5>Basic Stats</h5>

      {
        props.categories.map((category) => {
          return (
            <Category
              key={ category.id }
              handleToggle={ props.handleToggle.bind(this) }
              label={ category.name }
              checked={ props.renderedCategories[category.value] }
              value={ category.value }
            />
          );
        })
      }
    </div>
  );
}
