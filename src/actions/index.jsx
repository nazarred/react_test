import { ADD_POST, DELETE_POST } from './actions-type';

export const addPost = (data) => ({
  type: ADD_POST,
  payload: {
    slug: data.get('title').replace(' ', '-'),
    title: data.get('title'),
    url: data.get('url')
  }
});

export const deletePost = slug => ({
  type: DELETE_POST,
  payload: {
    slug
  }
});