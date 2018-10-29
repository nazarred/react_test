import { combineReducers } from 'redux';

// Reducers
import postReducer from './post-reducer';

// Combine Reducers
var reducers = combineReducers({
    postState: postReducer,
});

export default reducers;