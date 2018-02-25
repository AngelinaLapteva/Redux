import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import our reducers to get changes inside of state 
import posts from './posts';
import comments from './comments';
// where router: routerReducer helps us to keep changes as well as states of components
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;