import { Map } from 'immutable';
import {
  GET_PLAYERS,
  GET_PLAYER_CAREER_STATS,
  DELETE_PLAYER_CAREER_STATS,
  TOGGLE_CATEGORY
} from '../actions/players';

const INITIAL_STATE = {
  allPlayers: [],
  careerStats: [],
  renderedCategories: {
    points: true,
    threes: false,
    rebounds: true,
    assists: false,
    steals: false,
    blocks: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_PLAYERS:
      const players = action.payload.data.resultSets[0].rowSet;
      const parsedPlayers = players.map((player) => {
        return {
          id: player[0],
          name: player[2],
          teamLocation: player[8],
          teamName: player[9],
          teamAbbv: player[10],
        }
      });

      return { ...state, allPlayers: parsedPlayers };
    case GET_PLAYER_CAREER_STATS:
      const careerStats = action.payload.data.resultSets[0].rowSet;
      const playerId = action.payload.data.parameters.PlayerID;
      const parsedCareerStats = careerStats.map((season) => {
        return {
          season: season[1],
          team: season[4],
          points: season[26],
          threes: season[12],
          rebounds: season[20],
          assists: season[21],
          steals: season[22],
          blocks: season[23],
        }
      });

      return { ...state, careerStats: [...state.careerStats, {
          playerId: playerId,
          seasons: parsedCareerStats
        }]
      };
    case DELETE_PLAYER_CAREER_STATS:
      const filteredCareerStats = state.careerStats.filter(
        (playerCareer) => playerCareer.playerId !== action.payload
      );

      return { ...state, careerStats: filteredCareerStats };
    case TOGGLE_CATEGORY:
      let clonedCategories = Object.assign({}, state.renderedCategories);
      clonedCategories[action.payload] = !clonedCategories[action.payload];
      const toggledCategories = Object.assign({}, clonedCategories);

      return { ...state, renderedCategories: toggledCategories };
    default:
      return state;
  }
}
