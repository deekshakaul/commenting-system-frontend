import React, { Component } from 'react';

class CommentRow extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.showReplies = this.showReplies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comment: "",
      commentId: -1,
      willEdit: false
    }
  }

  componentWillMount() {
    this.setState({
      comment: this.props.comment,
      commentId: this.props.commentId
    })
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  handleEdit() {
    this.setState({
      comment: this.props.comment,
      willEdit: true
    })
  }

  showReplies(comment) {
    var replies = []
    this.props.replies.forEach(reply => {
      replies.push(
        <CommentRow
          username={reply.username}
          comment={reply.post}
          commentId={reply.commentId}
          replies={reply.replies}
          parent={reply.parent}
          onPostComment={this.props.onPostComment}
          onEditComment={this.props.onEditComment}
        />
      )
    });
    return (
      {replies}
    )
  }

  render() {
    const replies = this.props.replies.forEach((reply, i) => {
        return <CommentRow
          username={reply.username}
          comment={reply.post}
          commentId={reply.commentId}
          replies={reply.replies}
          parent={reply.parent}
          onPostComment={this.props.onPostComment}
          onEditComment={this.props.onEditComment}
          key={i}
        />
      
    });
    var showReplies= false
    return (
      <React.Fragment>
        <tr>
          <div className="comment">
            <div className="commentBy">
              By {this.props.username}
            </div>
            <div>
              {this.props.comment}
            </div>
            <div>
              <button className="btn btn-link comment-action" data-toggle = "collapse" data-target = "replies" onClick={() => {
                showReplies = true
              }}>Show all replies</button> &nbsp;
                <button value="Reply" className="btn btn-link comment-action" data-toggle="modal" data-target="#myModal" onClick={() => {
                this.setState({ willEdit: false })
              }}>Reply</button>&nbsp;
              {
                this.props.username == sessionStorage.getItem('username') ? <button value="Edit" className="btn btn-link comment-action" data-toggle="modal" data-target="#myModal" onClick={() => {
                  this.setState({ willEdit: true })
                }}>Edit</button> : ""
              }
            </div>

              <div className = "replies">
              {
                showReplies ? this.showReplies(this.props.replies) : " "
              }
              </div>

            <div className="modal" id="myModal">
              <div className="modal-dialog-centered">
                <div className="container modal-content" id="comment-box-modal">
                  <div className="modal-header">
                    <div className="modal-title">
                      {this.state.willEdit ? "Edit Comment" : "Reply to comment"}
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => {
                    }}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Write your comment here..."
                        value={this.state.willEdit ? this.state.comment : null}
                        style={{
                          width: "100%",
                          height: "80px"
                        }}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input className="btn btn-primary" name="Post" value="Post ➤" data-dismiss="modal" onClick={() => {
                        this.state.willEdit ? this.props.onEditComment(this.props.comment,
                          sessionStorage.getItem('username'),
                          this.props.commentId) : this.props.onPostComment(this.props.comment,
                            sessionStorage.getItem('username'),
                            this.props.commentId)
                        this.setState({ willEdit: false })
                      }} />
                    </div>
                    <div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </tr>
      </React.Fragment>
    );
  }
}

export default CommentRow;
