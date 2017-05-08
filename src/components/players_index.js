import React from 'react';
import PlayersSearch from '../containers/players_search';
import PlayersCareers from '../containers/players_careers';
import Categories from '../containers/categories';

export default () => {
  return <div className="rc-players-index row">
    <div className="col-md-3">
      <Categories />
    </div>
    <div className="col-md-9">
      <PlayersSearch />
      <PlayersCareers />
    </div>
  </div>
}
