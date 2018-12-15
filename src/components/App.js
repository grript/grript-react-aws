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

import Amplify from "aws-amplify";
import config from "../config";


const class_name = ClassLayoutMainDesktop;

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
  cacheOptions: {
    dataIdFromObject: (obj) => {
      let id = defaultDataIdFromObject(obj);
      console.log('cache options obj',obj);
      console.log('cache options id', id);
      if (!id) {
        const { __typename: typename } = obj;
        console.log('typename', typename);
        switch (typename) {
          case 'Team':
            return `${typename}:${obj.teamId}`;
          default:
            return "sdsdsdsrocks";  // xxxx warning: this should not be id nor a fixed string. but fixed string seems to work .
        }
      }

      return id;
    }
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


Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});