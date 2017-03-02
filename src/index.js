import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormView from './FormView';
import './index.css';
import { 
  Router, 
  Route,
  browserHistory 
} from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/search" component={FormView}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
