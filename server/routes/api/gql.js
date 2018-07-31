import express from 'express'
// import passport from 'passport'
import graphqlHTTP from 'express-graphql'
import {
  buildSchema
} from 'graphql'
import groups from './../../controllers/groups.controller'

const gql = express.Router()

// GraphQL schema
const schema = buildSchema(`
  type Query {
    groups(id: String): [Group]
  },
  type Group {
    _id: String
    title: String
    items: [Skill]
    icon: String
    createdAt: String
  }
  type Skill {
    _id: String
    title: String
    value: Int
    group: String
    createdAt: String
  }
`)

// Root resolver
const root = {
  groups: async () => {
    const result = await groups.list()
    return result.data
  }
}

// Create an express server and a GraphQL endpoint
gql.get('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

gql.post('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: false
}))

export default gql
