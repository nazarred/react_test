import { ADD_POST, DELETE_POST } from '../actions/actions-type';

const initialState = [
      {
          slug: 'test-slug',
          title: 'test',
          url: 'https://hostingkartinok.com/foto/wp-content/uploads/2015/03/sozdanie-panoramnogo_pejzazha.jpg'
      }
];

const postReducer = function(state = initialState, action) {

  switch(action.type) {
  case ADD_POST:
      console.log(state.concat([action.payload]));
      var new_state = state.concat([action.payload]);
      return new_state;
      // return state.posts.concat([action.payload]);
    case DELETE_POST:
      return state.filter(post => post.slug !== action.payload.slug);
    default:
      return state;
  }

};

export default postReducer;