/**
 * @fileoverview This file contains the application index code.
 */

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import Landing from './views/Landing.js';
import OurTeam from './views/OurTeam.js';
import Services from './views/Services.js';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'uswds/dist/css/uswds.min.css';

const cache = new InMemoryCache();
let client;

client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache,
})


ReactDOM.render((
    <Provider>
        <ApolloProvider client={client}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" name="Default Landing Page" component={App} />
                    <Route exact path="/Landing" name="Landing" component={Landing} />
                    <Route exact path="/OurTeam" name="OurTeam" component={OurTeam} />
                    <Route exact path="/Services" name="Services" component={Services} />
                </Switch>
            </HashRouter>
        </ApolloProvider>
    </Provider>
), document.getElementById('root'));