import axios from 'axios';
import store from '../Store/index.js';

function onSignup(response){
  return {
    type:"SIGNUP",
    response
  }
}

export function saveUser(creds){
  var baseLink = store.getState().login.baseLink
  return (dispatch)=>{
    axios.post(baseLink + 'signup', {
        ...creds
      }).
      then(json=>dispatch(onSignup(json)));
  }
}
