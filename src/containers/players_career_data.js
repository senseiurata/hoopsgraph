import React, { Component } from 'react';
import PlayerCareer from '../components/player_career'
import { connect } from 'react-redux';
import CATEGORIES from '../constants/categories';

const PlayersCareerData = ({ allPlayers, careerStats, renderedCategories }) => {
  if (careerStats.length === 0) {
    return <div></div>;
  }

  return (
    <table className="rc-players-career-data">
      <thead>
        <tr>
          <th>Player</th>

          {
            CATEGORIES.map((category) => {
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
                categories={ CATEGORIES }
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    allPlayers: state.players.allPlayers,
    careerStats: state.players.careerStats,
    renderedCategories: state.players.renderedCategories,
  };
}

export default connect(mapStateToProps)(PlayersCareerData);
