import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-boost';
import {Provider} from 'react-redux';
import { createStore, Middleware, compose, applyMiddleware } from 'redux';
import combineReducer from './reducer/index';
import { RootComponent } from './components/router';


// control action state using query string below
// http://localhost:3000/?debug_session=logged_in  =>redux state stay even refearch page seen in redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducer,
    // composeEnhancers(applyMiddleware(reduxThunk))
);

const URI= 'http://localhost:4000/graphql'
// const cache= new InMemoryCache({
//   dataIdFromObject: Object=> Object.id || null
// });

const client = new ApolloClient({
  uri: URI
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="container">
          <RootComponent />
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
