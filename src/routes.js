import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PlayersIndex from './components/players_index';
import PlayerProfile from './components/player_profile';

import App from './components/app';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ PlayersIndex } />
    <Route path="profile/:id" component={ PlayerProfile } />
  </Route>
);
