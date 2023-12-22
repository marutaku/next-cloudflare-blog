import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";

const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const http = new HttpLink({
  uri: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const link = from([http]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
