import React from 'react';
import PlayersSearchResult from './players_search_result';

export default ({ filteredPlayers, clearSearchField }) => {
  const players = filteredPlayers.map((player) => {
    return <PlayersSearchResult clearSearchField={ clearSearchField.bind(this) } key={ player.id } player={ player } />;
  });

  return (
    <ul className="dropdown-menu" style={{ 'display': 'block' }}>
      { players }
    </ul>
  );
}
