import { gql } from "@urql/core";

export const FeedQuery = gql`
  query {
    feed {
      id
      title
      content
      published
      author {
        id
        name
        email
      }
    }
  }
`;

export const UserQuery = gql`
  query {
    allUsers {
      name
      email
      id
      posts {
        id
      }
    }
  }
`;

export const PostQuery = gql`
  query Post($id: Int!) {
    postById(id: $id) {
      author {
        name
      }
      content
      title
      id
    }
  }
`;

export const ToggleFeed = gql`
  mutation ($id: ID!, $published: Boolean!) {
    setPublished(id: $id, published: $done) {
      id
    }
  }
`;

export const AddFeed = gql`
  mutation {
    createDraft(
      data: { title: $title, content: $content }
      authorEmail: "alice@prisma.io"
    ) {
      id
      viewCount
      published
      author {
        id
        name
      }
    }
  }
`;
