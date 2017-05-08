import React, { Component } from 'react';
import PlayersSearchResults from './players_search_results';

class PlayersSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  clearSearchTerm() {
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
      <div className="rc-players-search-bar dropdown">
        <input onChange={ this.onInputChange.bind(this) } value={ this.state.term } type="text" className="form-control" placeholder="Search NBA Players" />

        {
          this.state.term ?
          <PlayersSearchResults
            filteredPlayers={ this.getFilteredPlayers() }
            clearSearchTerm={ this.clearSearchTerm.bind(this) }
            addPlayerCareerData={ this.props.addPlayerCareerData }
          /> : null
        }
      </div>
    );
  }
}

export default PlayersSearchBar;
