import React, { Component } from 'react';
import { Link, PropTypes } from 'react-router';

class PlayerProfile extends Component {
  static contextTypes =  {
    router: PropTypes.object
  }

  render() {
    return <div>
      { this.props.params.id }
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
    </div>;
  }
}

export default PlayerProfile;
