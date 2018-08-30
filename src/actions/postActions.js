import { FETCH_POSTS, NEW_POST } from './types.js'

// This is the es6 syntax
//export const fetchPosts = () => dispatch() => {
//}
export function fetchPosts() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
      }))
  }
}

