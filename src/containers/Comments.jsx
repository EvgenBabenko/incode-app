import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import CommentList from '../components/CommentList';
import NoItems from '../components/NoItems';
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
    const { addComment, isEditComment, updateComment } = this.props;
    // print the form values to the console
    console.log('submit',values, isEditComment,commentID);

    isEditComment ? updateComment(commentID, values) : addComment(values);


    // closeEditProfile();
  }

  render() {
    const { commentList } = this.props;

    console.log('comments', this.props);

    return (
      commentList.length
        ? <CommentList submitCallback={this.submitCallback} {...this.props} />
        : <NoItems text="No comments" />
    );
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
  openEditComment: () => dispatch(commentsActions.openEditComment()),
  closeEditComment: () => dispatch(commentsActions.closeEditComment()),
});

Comments.propTypes = {
  loadComments: T.func.isRequired,
  commentList: T.arrayOf(T.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
