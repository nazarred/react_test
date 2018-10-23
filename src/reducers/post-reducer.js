import * as types from '../actions/actions-type';
// import _ from 'lodash';

const initialState = {
  posts: []
};

const postReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_POSTS_SUCCESS:
      return Object.assign({}, state, { users: action.posts });

    // case types.DELETE_USER_SUCCESS:
    //
    //   // Use lodash to create a new user array without the user we want to remove
    //   // const newUsers = _.filter(state.users, user => user.id != action.userId);
    //   return Object.assign({}, state, { users: newUsers });

    case types.USER_ADD_SUCCESS:
      return Object.assign({}, state, { posts: action.posts });

  }

  return state;

};

export default postReducer;