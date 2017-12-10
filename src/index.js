import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import promise from 'redux-promise';
//import thunk from 'redux-thunk';
import Async from './middlewares/async';
import reducers from './reducers';

import App from './components/app';
import LogInPage from './components/login_page';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>  
        <Route path="/app" component={App} />
        <Route path="/" component={LogInPage} />
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
