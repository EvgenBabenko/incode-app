import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import CommentList from '../components/CommentList';
import NoItems from '../components/NoItems';
import { commentsActions } from '../modules/comments';
import * as mock from '../fixtures';

class Comments extends Component {
  componentDidMount() {
    const { commentList } = this.props;

    console.log(commentList, !!commentList);

    if (commentList.length) return;

    this.getComments();
  }

  getComments = () => {
    const { loadComments } = this.props;

    loadComments(mock.comments);
  }

  render() {
    const { commentList } = this.props;

    return (
      commentList.length
        ? <CommentList {...this.props} />
        : <NoItems text="No comments" />
    );
  }
}

const mapStateToProps = state => ({
  commentList: state.comments.commentList,
});

const mapDispatchToProps = dispatch => ({
  loadComments: comments => dispatch(commentsActions.loadComments(comments)),
});

Comments.propTypes = {
  loadComments: T.func.isRequired,
  commentList: T.arrayOf(T.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
