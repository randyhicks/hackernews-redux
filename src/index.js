import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
console.log(store.getState());
ReactDOM.render(
  <App
    stories={store.getState().storyState}
    onArchive={objectID => {
      console.log(objectID);
    }}
  />,
  document.getElementById('root')
);
registerServiceWorker();
