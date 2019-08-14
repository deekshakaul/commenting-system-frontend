
var showCommentReducer = (state={
  comments:[]
},action)=>{

    switch(action.type){
      case "SHOW_COMMENT":
        var newState =  Object.assign({},state,{status: action.response.status, comments: action.response.data});
        return newState;
      default:
        return state;
    }
}

export default showCommentReducer;
