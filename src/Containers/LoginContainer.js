import {connect} from 'react-redux';
import Login from './../Components/Login.js';
import {validateCredentials} from './../Actions/loginActions.js';

var mapStateToProps = (state)=>{
  return {
    status:state.login.status
  }
}

var mapDispatchToProps = (dispatch)=>{
  return {
    onLogin:(creds)=>{
      dispatch(validateCredentials(creds));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
