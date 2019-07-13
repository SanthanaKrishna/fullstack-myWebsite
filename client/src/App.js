import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { RouteComponent } from './container/router';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="container">
          <RouteComponent />
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
