import React from 'react';
import PlayersSearch from '../containers/players_search';
import PlayersCareerData from '../containers/players_career_data';
import Categories from '../containers/categories';

export default () => {
  return <div>
    <div className="col-md-3">
      <Categories />
    </div>
    <div className="col-md-9">
      <PlayersSearch />
      <PlayersCareerData />
    </div>
  </div>
}