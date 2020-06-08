import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew'
import PostsShow from './components/PostsShow'

