import axios from 'axios';

export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_PLAYER_CAREER_STATS = 'GET_PLAYER_CAREER_STATS';
export const DELETE_PLAYER_CAREER_STATS = 'DELETE_PLAYER_CAREER_STATS';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';

const ROOT_URL = 'http://localhost:3000';
const PLAYERS_LIST_PATH = 'players';
const CAREER_STATS_PATH = 'careerstats';

export function getPlayers() {
  const request = axios.get(`${ROOT_URL}/${PLAYERS_LIST_PATH}`);
  console.log(request);

  return {
    type: GET_PLAYERS,
    payload: request
  };
}

export function getPlayerCareerStats(id) {
  const request = axios.get(`${ROOT_URL}/${CAREER_STATS_PATH}/${id}`);

  return {
    type: GET_PLAYER_CAREER_STATS,
    payload: request
  };
}

export function deletePlayerCareerStats(id) {
  return {
    type: DELETE_PLAYER_CAREER_STATS,
    payload: id
  };
}

export function toggleCategory(category) {
  return {
    type: TOGGLE_CATEGORY,
    payload: category
  };
}

