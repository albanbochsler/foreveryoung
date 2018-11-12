import React from 'react';
// import CSS
import css from './styles/style.styl';

import {render} from 'react-dom';

import App from './components/App'
import Single from './components/Single'
import VideoGrid from './components/VideoGrid'
import { Provider } from 'react-redux';
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={VideoGrid}></IndexRoute>
                <Route path="/detail/:videoId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))