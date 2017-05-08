import React from 'react';
import PlayersSearchResult from './players_search_result';

export default ({ filteredPlayers, clearSearchTerm, addPlayerCareerData }) => {
  return (
    <ul className="rc-players-search-results dropdown-menu" style={{ 'display': 'block' }}>
      {
        filteredPlayers.map((player) => {
          return (
            <li key={ player.id }>
              <PlayersSearchResult
                player={ player }
                clearSearchTerm={ clearSearchTerm.bind(this) }
                addPlayerCareerData={ addPlayerCareerData }
              />
            </li>
          );
        })
      }
    </ul>
  );
}
