import React from 'react';

export default (props) => {
  const { handleToggle, checked, label, value } = props;

  return (
    <div className="rc-category">
      <label>
        <input onChange={ handleToggle.bind(this, value) } type="checkbox" checked={ checked ? 'checked' : '' } />
        { label }
      </label>
    </div>
  );
}
