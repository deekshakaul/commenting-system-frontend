var signupReducer = (state={
  status:''
},action)=>{
    switch(action.type){
      case "SIGNUP":
        
        return Object.assign({},state,{status:action.response.data.status});

      default:
        return state;
    }
}

export default signupReducer;
