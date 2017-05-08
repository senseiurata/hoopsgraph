import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePlayerCareerStats } from '../actions/players';
import CATEGORIES from '../constants/categories';
import PlayerCareer from '../components/player_career';
import PlayerCareersTable from '../components/player_careers_table';

const PlayersCareers = ({
  allPlayers,
  careerStats,
  renderedCategories,
  deletePlayerCareerStats
}) => {
  if (careerStats.length === 0) {
    return <div></div>;
  }

  return (
    <PlayerCareersTable
      categories={ CATEGORIES }
      allPlayers={ allPlayers }
      renderedCategories={ renderedCategories }
      careerStats={ careerStats }
      deletePlayerCareerStats={ deletePlayerCareerStats }
    />
  );
}

function mapStateToProps(state) {
  return {
    allPlayers: state.players.allPlayers,
    careerStats: state.players.careerStats,
    renderedCategories: state.players.renderedCategories,
  };
}

export default connect(mapStateToProps, { deletePlayerCareerStats })(PlayersCareers);
