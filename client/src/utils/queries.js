import { gql } from "@apollo/client";
// executes the `me` query set up using Apollo Server.
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks {
      _id
      bookId
      authors
      description
      title
      image
      links

      }
    }
  }
`;
// executes the `LOGIN_USER` mutation, the `addUser` mutation, the `saveBook` mutation, and the removeBook` mutation using Apollo Server.



export const searchGoogleBooks = function (query) {
  console.log(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};


// export const QUERY_TECH = gql`
//   query tech {
//     tech {
//       _id
//       name
//     }
//   }
// `;

// export const QUERY_MATCHUPS = gql`
//   query matchups($_id: String) {
//     matchups(_id: $_id) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;