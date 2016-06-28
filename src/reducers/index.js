import { combineReducers } from 'redux';
import PlayersReducer from '../reducers/reducer_players';

const rootReducer = combineReducers({
  players: PlayersReducer
});

export default rootReducer;
