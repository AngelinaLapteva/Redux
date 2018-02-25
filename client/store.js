import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data

const defaultState = {
	posts: posts,
	comments: comments
};

const mystore = createStore(rootReducer, defaultState);


export const history = syncHistoryWithStore(browserHistory, mystore);

export default mystore;

