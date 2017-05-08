import React, { Component } from 'react';
import { Link, PropTypes } from 'react-router';

class PlayerProfile extends Component {
  render() {
    return <div className="rc-player-profile">
      { this.props.params.id }
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
    </div>;
  }
}

export default PlayerProfile;
