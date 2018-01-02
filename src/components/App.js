import React from 'react';
import Stories from './Stories';
import SearchStories from './SearchStories';
import './App.css';

const App = () => (
  <div className="app">
    <SearchStories />
    <Stories />
  </div>
);

export default App;
