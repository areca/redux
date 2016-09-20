import {createStore, compose} from 'redux';
import {synchistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'rect-router';

// Import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
  posts
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = synchistoryWithStore(browserHistory, store);

export default store;
