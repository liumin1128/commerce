import gql from 'graphql-tag';

export const COMMENT_LIST = gql`
  query CommentList($first: Int, $skip: Int, $session: String!) {
    list: comments(first: $first, skip: $skip, session: $session) {
      __typename
      _id
      session
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
      replys {
        _id
        content
        createdAt
        user {
          nickname
          avatarUrl
        }
        replyTo {
          _id
          user {
            _id
            nickname
            avatarUrl
          }
        }
      }
    }
    meta: _commentsMeta(session: $session) {
      count
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($content: String!, $session: String!, $replyTo: String, $commentTo: String) {
    result: createComment(content: $content, session: $session, replyTo: $replyTo, commentTo: $commentTo) {
      status
      message
      data {
        __typename
        _id
        content
        session
        createdAt
        replys {
          _id
        }
        user {
          nickname
          avatarUrl
        }
        replyTo {
          _id
          user {
            _id
            nickname
            avatarUrl
          }
        }
      }
    }
  }
`;
