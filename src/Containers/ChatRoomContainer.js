import {connect} from 'react-redux';
import ShowComments from './../Components/ShowComments.js';
import {fetchComments, postComment, editComment} from '../Actions/showCommentAction.js';

var mapStateToProps = (state)=>{
  return {
    comments: state.showComment.comments,
  }
}

var mapDispatchToProps = (dispatch)=>{
  return {
    fetchComments:(show)=>{
      dispatch(fetchComments(show));
    },
    onPostComment:(comment, username, parent)=>{
      dispatch(postComment(comment, username, parent));
    },
    onEditComment:(comment, username, parent)=>{
      dispatch(editComment(comment, username, parent));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowComments);
