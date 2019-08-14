import {connect} from 'react-redux';
import Signup from './../Components/Signup.js';
import {saveUser} from './../Actions/signupAction.js';

var mapStateToProps = (state)=>{
  return {
    status:state.signup.status
  }
}

var mapDispatchToProps = (dispatch)=>{
  return {
    onSignup:(creds)=>{
      dispatch(saveUser(creds));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
