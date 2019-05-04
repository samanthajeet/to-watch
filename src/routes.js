import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Search from './components/Search/Search';
import ToWatchList from './components/ToWatchList/ToWatchList';


export default (
  <Switch>
    <Route path='/search' component={Search} />
    <Route path='/' component={ToWatchList} />
  </Switch>
)