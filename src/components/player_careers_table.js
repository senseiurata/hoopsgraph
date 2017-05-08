import React from 'react';
import PlayerCareer from './player_career';

export default (props) => {
  const {
    categories,
    renderedCategories,
    careerStats,
    allPlayers,
    deletePlayerCareerStats,
  } = props;

  return (
    <table className="rc-players-careers-table">
      <thead>
        <tr>
          <th>Player</th>

          {
            categories.map((category) => {
              return renderedCategories[category.value] ?
                <th key={ category.id }>
                  { category.name }
                </th> : null;
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          careerStats.map((playerCareer) => {
            return (
              <PlayerCareer
                key={ playerCareer.playerId }
                playerId={ playerCareer.playerId }
                playerName={ allPlayers.filter((player) => player.id === playerCareer.playerId)[0].name }
                seasons={ playerCareer.seasons }
                renderedCategories={ renderedCategories }
                categories={ categories }
                deletePlayerCareerStats={ deletePlayerCareerStats }
              />
            );
          })
        }
      </tbody>
    </table>
  );
}
