import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayers } from '../actions/players';
import PlayersSearchResults from '../components/players_search_results';

class PlayersSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  componentWillMount() {
    this.props.getPlayers();
  }

  clearSearchField() {
    this.setState({ term: '' })
  }

  getFilteredPlayers() {
    if (!this.props.allPlayers) {
      return [];
    }

    const filteredPlayers = this.props.allPlayers.filter((player) => {
      return player.name.toLowerCase().match(this.state.term.toLowerCase());
    }).slice(0, 5);

    return filteredPlayers;
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div className="dropdown">
        <input onChange={ this.onInputChange.bind(this) } value={ this.state.term } type="text" className="form-control" placeholder="Search NBA Players" />

        {
          this.state.term ?
          <PlayersSearchResults
            filteredPlayers={ this.getFilteredPlayers() }
            clearSearchField={ this.clearSearchField.bind(this) }
          /> : ''
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { allPlayers: state.players.allPlayers };
}

export default connect(mapStateToProps, { getPlayers })(PlayersSearch);
