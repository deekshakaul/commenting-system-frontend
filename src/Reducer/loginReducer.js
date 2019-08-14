

var loginReducer = (state={
  status:'',
  baseLink:"http://localhost:3000/"
},action)=>{
    switch(action.type){
      case "LOGIN":
        if(action.response.data.status == 200){
          sessionStorage.setItem('loggedIn',true);
          sessionStorage.setItem('username', action.response.data.user);
        }
        return Object.assign({},state,{status:action.response.data.status});

      default:
        return state;
    }
}

export default loginReducer;
