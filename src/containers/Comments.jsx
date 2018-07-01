import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import CommentList from '../components/CommentList';
import { commentsActions } from '../modules/comments';
import * as mock from '../fixtures';

class Comments extends Component {
  componentDidMount() {
    this.getComments();
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.isLogin !== prevProps.isLogin) {
  //     // this.fetchData(this.props.userID);
  //     this.getComments();
  //   }
  // }

  getComments = () => {
    const { taskID, loadComments } = this.props;

    const comments = Object.values(mock.comment).filter(comment => comment.taskID === taskID);

    console.log('comments', comments);

    loadComments(comments);
  }

  submitCallback = (values, commentID) => {
    const {
      addComment, isEditComment, updateComment, userID, taskID
    } = this.props;
    // print the form values to the console
    console.log('submit', values, isEditComment, commentID);

    if (isEditComment) {
      updateComment(commentID, values);
    } else {
      addComment({ ...values, userID, taskID });
    }
  }

  render() {
    console.log('comments', this.props);

    return <CommentList submitCallback={this.submitCallback} {...this.props} />;
  }
}

const mapStateToProps = state => ({
  commentList: state.comments.commentList,
  userID: state.user.userID,
  isEditComment: state.comments.isEditComment,
});

const mapDispatchToProps = dispatch => ({
  loadComments: comments => dispatch(commentsActions.loadComments(comments)),
  addComment: comment => dispatch(commentsActions.addComment(comment)),
  updateComment: (id, comment) => dispatch(commentsActions.updateComment(id, comment)),
  deleteComment: id => dispatch(commentsActions.deleteComment(id)),
  openEditComment: () => dispatch(commentsActions.openEditComment()),
  closeEditComment: () => dispatch(commentsActions.closeEditComment()),
});

Comments.propTypes = {
  loadComments: T.func.isRequired,
  taskID: T.number.isRequired,
  isEditComment: T.bool.isRequired,
  addComment: T.func.isRequired,
  updateComment: T.func.isRequired,
  userID: T.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
