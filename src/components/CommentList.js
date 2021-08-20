import React from "react";
import PropTypes from "prop-types";
import {
  GlobalStyle,
  CommentItemDiv,
  AvatarDiv,
  AvatarImg,
  AuthorSpan,
  MessageDiv,
  TextSpan,
  CommentListDiv,
} from "./styles";
export default function CommentList({ loading, comments, totalCount }) {
  if (loading) {
    return <div>loading</div>;
  }
  if (comments.length === 0) {
    return <div>empty</div>;
  }
  return (
    <>
      <GlobalStyle />
      <CommentListDiv>
        {comments.map(({ text, author: { name, avatar } }) => (
          <CommentItemDiv key={`comment_${name}`}>
            <AvatarDiv>
              <AvatarImg src={avatar} />
            </AvatarDiv>
            <MessageDiv>
              <AuthorSpan>{name}</AuthorSpan> <TextSpan>{text}</TextSpan>
            </MessageDiv>
          </CommentItemDiv>
        ))}
      </CommentListDiv>
    </>
  );
}

CommentList.propTypes = {
  /**
   * Is the component in the loading state
   */
  loading: PropTypes.bool,

  /**
   * Total number of comments
   */
  totalCount: PropTypes.number,
  /**
   * List of comments
   */
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        avatar: PropTypes.string,
      }),
    })
  ),
};

CommentList.defaultProps = {
  loading: false,
  totalCount: 10,
  comments: [],
};
