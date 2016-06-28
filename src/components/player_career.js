import React, { Component } from 'react';
import PlayerStatsChart from './player_stats_chart';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { deletePlayerCareerStats } from '../actions/players';
import CATEGORIES from '../constants/categories';

const IMAGE_URL = encodeURI('http://stats.nba.com/media/players/230x185');

const getStats = (seasons, type) => {
  return seasons.map((season) => season[type]);
}

class PlayerCareer extends Component {
  constructor(props) {
    super(props);
  }

  handleDeletePlayer() {
    this.props.deletePlayerCareerStats(this.props.playerId);
  }

  render() {
    const { playerId, playerName, seasons, renderedCategories } = this.props;

    return (
      <tr className="rc-player-career">
        <td className="visual">
          <img className="picture" src={`${IMAGE_URL}/${playerId}.png`} />
          <div className="name">{ playerName }</div>
          <Link to={ `/profile/${playerId}` } className="btn btn-primary">
            Profile
          </Link>
          <button className="btn btn-danger" onClick={ this.handleDeletePlayer.bind(this) }>Delete</button>
        </td>

        {
          CATEGORIES.map((category) => {
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
}

export default connect(null, { deletePlayerCareerStats })(PlayerCareer);