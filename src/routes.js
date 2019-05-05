import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Search from './components/Search/Search';
import ToWatchList from './components/ToWatchList/ToWatchList';
import App from './App'


export default (
  <Switch>
    <Route path='/search' component={Search} />
    <Route path='/app' component={App} />
    <Route path='/' component={ToWatchList} />
  </Switch>
)