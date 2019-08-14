import React, { Component } from 'react';
import CommentRow from './CommentRow';

class ShowComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: "all",
      comment: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  showComments(comments) {
    var elements = []
    comments.map((eachComment, i) =>
    {
      elements.push(
        <CommentRow
          username={eachComment.username}
          comment={eachComment.post}
          commentId= {eachComment.commentId}
          replies = {eachComment.replies}
          parent={eachComment.parent}
          onPostComment = {this.props.onPostComment}
          onEditComment = {this.props.onEditComment}
          key = {i}
          />
      )}
    )
        return <React.Fragment>{elements}</React.Fragment>

  }

  componentWillMount(){
    if (sessionStorage.getItem('username') == null) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    this.props.fetchComments(this.state.show);
  }

  render() {
    // var rows = this.showComments(this.props.comments)
    const rows = this.props.comments.map((item, key) =>
    <React.Fragment key={item.id}><CommentRow
          username={item.username}
          comment={item.post}
          commentId= {item.commentId}
          replies = {item.replies}
          parent={item.parent}
          onPostComment = {this.props.onPostComment}
          onEditComment = {this.props.onEditComment}
    ></CommentRow></React.Fragment>
);
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Write your comment here..."
              style={{
                width: "100%",
                height: "80px"
              }}
              onChange = {this.handleChange}
            />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" name="Post" value="Post ➤" onClick={() => {
              this.props.onPostComment(this.state.comment,
                sessionStorage.getItem('username'),
                "0")
            }} />
          </div>
        </div>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-hover table-striped comment-list">
                  <tbody>
                    {rows}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default ShowComments;
