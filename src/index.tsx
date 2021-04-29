import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.hydrate(<ApplicationWithRouter />, document.getElementById('app'));

function ApplicationWithRouter() {
  return (
      <Router>
        <App />
      </Router>
  )
}

