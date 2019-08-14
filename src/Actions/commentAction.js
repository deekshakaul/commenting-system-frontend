import axios from 'axios';
import store from '../Store/index.js';

function postReplies(response){
  return {
    type: "POST_REPLY",
    response
  }
}

function onPostComment(response){
  return {
    type: "POST_COMMENT",
    response
  }
}

export function fetchNestedComments(show){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.get(baseLink + 'show_comments?show='+show).
      then(json=>dispatch(postReplies(json)));
  }
}

export function postComment(comment, username, parent){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.post(baseLink + 'post_comment', {
        "post": comment,
        "username": username,
        "parent" : parent
      }).
      then(json=>dispatch(onPostComment(json)));
  }
}

export function editComment(comment, username, commentId){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.post(baseLink + 'edit_comment', {
        "post": comment,
        "username": username,
        "commentId" : commentId
      }).
      then(json=>dispatch(onPostComment(json)));
  }
}