import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import BookSearch from './components/BookSearch';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/search" component={BookSearch}/>
        </Route>
    </Router>
);