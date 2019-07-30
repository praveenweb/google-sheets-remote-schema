const gql = require('graphql-tag');

const typeDefs = gql`
    scalar JSON
    type Sheets {
        urls: JSON
    }

    type Query {
        worksheet(author: String!): Sheets
    }
`;

module.exports = {
    typeDefs,
};