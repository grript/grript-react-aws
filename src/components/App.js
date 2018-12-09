import React, { Component } from 'react';

import './App.css';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import appSyncConfig from "../aws-exports";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import { ClassLayoutMainDesktop } from './Variables';
import RoutesLayout from './RoutesLayout';

const class_name = ClassLayoutMainDesktop;

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  }
});




const App = () => (
  <Router>      
    <div className={`App  ${class_name}`}>
      <RoutesLayout />
    </div>
  </Router>
)

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
