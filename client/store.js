import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
  import allReducer from './reducers/index';

import persons from './data/person-reducer';
// import videos from './data/videos';
// import questionReducer from './data/questionReducer';

// create an object for the default data
/*
const defaultState = {
    persons,
    videos,
    questionReducer
};
*/

const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
);

const store = createStore(allReducer, enhancer);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;