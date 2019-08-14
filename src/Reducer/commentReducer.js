
var commentReducer = (state={
    comments:[]
  },action)=>{
  
      switch(action.type){
        case "POST_REPLY":
          var newState =  Object.assign({},state,{comments: action.response.data});
          return newState;
        default:
          return state;
      }
  }
  
  export default commentReducer;
  