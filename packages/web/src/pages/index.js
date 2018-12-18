/**
 * NPM Packages
 */
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

/**
 * Routes
 */
import { default as HomePage } from "./Home";

/**
 * Create the client
 */
const client = new ApolloClient({
  link: ApolloLink.from([
    new WebSocketLink({
      uri: `ws://localhost:4000/graphql`,
      options: {
        reconnect: true
      }
    })
  ]),
  cache: new InMemoryCache()
});

/**
 * Components
 */
class WebSite extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HomePage />
      </ApolloProvider>
    );
  }
}
export default WebSite;
