import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerCareerStats } from '../actions/players';

const IMAGE_URL = encodeURI('http://stats.nba.com/media/players/132x132/');

class PlayersSearchResult extends Component {
  constructor(props) {
    super(props);
  }

  handleAddPlayer() {
    this.props.getPlayerCareerStats(this.props.player.id);
    this.props.clearSearchField();
  }

  render() {
    const player = this.props.player;

    return (
      <li>
        <div className="media">
          <div className="media-left">
            <img className="media-object" src={ `${IMAGE_URL}${player.id}.png` } />
          </div>
          <div className="media-body">
            <div>
              <h4 className="media-heading">{ player.name }</h4>
              <div>{ player.teamLocation } { player.teamName }</div>
            </div>

            <button onClick={ this.handleAddPlayer.bind(this) } className="btn btn-primary">Add</button>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, { getPlayerCareerStats })(PlayersSearchResult);