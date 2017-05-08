import React, { Component } from 'react';
import PlayerStatsChart from './player_stats_chart';
import { Link } from 'react-router';

const IMAGE_URL = encodeURI('http://stats.nba.com/media/players/230x185');

const getStats = (seasons, type) => {
  return seasons.map((season) => season[type]);
}

export default ({ 
  playerId,
  playerName,
  seasons,
  renderedCategories,
  deletePlayerCareerStats,
  categories
}) => {
  return (
    <tr className="rc-player-career">
      <td className="visual">
        <img className="picture" src={`${IMAGE_URL}/${playerId}.png`} />
        <div className="name">{ playerName }</div>

        <Link to={ `/profile/${playerId}` } className="btn btn-primary">
          Profile
        </Link>
        
        <button
          className="btn btn-danger"
          onClick={ deletePlayerCareerStats.bind(this, playerId) }
        >
          Delete
        </button>
      </td>

      {
        categories.map((category) => {
          return renderedCategories[category.value] ?
            <td key={ category.id }>
              <PlayerStatsChart
                data={ getStats(seasons, category.value) }
                min={ category.min }
                max={ category.max }
                color={ category.chartColor }
              />
            </td> : null
        })
      }
    </tr>
  );
}
