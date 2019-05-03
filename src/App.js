import React from 'react';
import Search from './components/Search/Search'
import ToWatchList from './components/ToWatchList/ToWatchList'

import './App.css';

function App() {
  return (
    <div className="App">
      <ToWatchList />
      <Search />
    </div>
  );
}

export default App;
