import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayers, getPlayerCareerStats } from '../actions/players';
import PlayersSearchBar from '../components/players_search_bar';

class PlayersSearch extends Component {
  componentWillMount() {
    this.props.getPlayers();
  }

  render() {
    return (
      <PlayersSearchBar
        allPlayers={ this.props.allPlayers }
        addPlayerCareerData={ this.props.getPlayerCareerStats }
      />
    );
  }
}

function mapStateToProps(state) {
  return { allPlayers: state.players.allPlayers };
}

export default connect(mapStateToProps, { getPlayers, getPlayerCareerStats })(PlayersSearch);
