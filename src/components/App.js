import React from 'react';
import './App.css';
import { Button } from 'antd';
import Stories from './Stories';

const App = ({ stories }) => (
  <div className="app">
    <Button
      style={{ margin: 15, boxShadow: '0 2px 5px 0 rgba(0,0,0,.39)' }}
      type="primary"
    >
      Button
    </Button>
    <Stories stories={stories} />
  </div>
);
export default App;
