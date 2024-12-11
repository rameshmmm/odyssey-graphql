import gql from 'graphql-tag';
export const typeDefs = gql`
type Query {
    "Query to get an array of tracks info for the homepage"
    tracksForHome: [Track!]!
}
"A track is a group of modules that teaches a specific topic"
type Track {
    id: ID!
    title: String!
    "The track's main author"
    author: Author!
    thumbnail: String
    "The track's approximate length it'd take to complete, in minutes"
    length: Int
    "The number of modules the track contains"
    modulesCount: Int
}

"Author of track(s)"
type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture URL"
    photo: String
}
`;