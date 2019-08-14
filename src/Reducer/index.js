import loginReducer from './loginReducer.js';
import showCommentReducer from './showCommentReducer.js';
import commentReducer from './commentReducer.js';
import signupReducer from './signupReducer.js';
import {combineReducers} from 'redux';

var indexReducer = combineReducers({
  login:loginReducer,
  showComment:showCommentReducer,
  commentRow: commentReducer,
  signup: signupReducer,
});

export default indexReducer;
