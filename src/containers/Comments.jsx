import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import T from 'prop-types';

import CommentList from '../components/CommentList';

// import { commentsActions } from '../modules/comments';
import * as commentActionCreators from '../modules/comments/actions';
import * as mock from '../fixtures';

class Comments extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;

    this.boundActionCreators = bindActionCreators(commentActionCreators, dispatch);

    this.getComments = this.getComments.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
  }

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

  getComments() {
    const { taskID } = this.props;

    const { dispatch } = this.props;

    const comments = Object.values(mock.comment).filter(comment => comment.taskID === taskID);

    console.log('comments', comments);

    // loadComments(comments);
    const loadComments = commentActionCreators.loadComments(comments);
    dispatch(loadComments);
  }

  submitCallback(values, commentID) {
    const {
      isEditComment, userID, taskID
    } = this.props;

    const { dispatch } = this.props;
    // print the form values to the console
    console.log('submit', values, isEditComment, commentID);

    if (isEditComment) {
      // updateComment(commentID, values);
      const updateComment = commentActionCreators.updateComment(commentID, values);
      dispatch(updateComment);
    } else {
      // addComment({ ...values, userID, taskID });
      const addComment = commentActionCreators.addComment({ ...values, userID, taskID });
      dispatch(addComment);
    }
  }

  render() {
    console.log('comments', this.props);

    return (
      <CommentList
        submitCallback={this.submitCallback}
        {...this.props}
        {...this.boundActionCreators}
      />
    );
  }
}

const mapStateToProps = state => ({
  commentList: state.comments.commentList,
  userID: state.user.userID,
  isEditComment: state.comments.isEditComment,
});

// const mapDispatchToProps = dispatch => ({
//   loadComments: comments => dispatch(commentsActions.loadComments(comments)),
//   addComment: comment => dispatch(commentsActions.addComment(comment)),
//   updateComment: (id, comment) => dispatch(commentsActions.updateComment(id, comment)),
//   deleteComment: id => dispatch(commentsActions.deleteComment(id)),
//   openEditComment: () => dispatch(commentsActions.openEditComment()),
//   closeEditComment: () => dispatch(commentsActions.closeEditComment()),
// });

Comments.propTypes = {
  // loadComments: T.func.isRequired,
  taskID: T.number.isRequired,
  isEditComment: T.bool.isRequired,
  // addComment: T.func.isRequired,
  // updateComment: T.func.isRequired,
  userID: T.number.isRequired,
};

export default connect(mapStateToProps)(Comments);
