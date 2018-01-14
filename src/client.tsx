import * as e6p from 'es6-promise';
(e6p as any).polyfill();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { configureStore } from './app/redux/store';
import routes from './app/routes';
// require('file-loader?name=[name].[ext]!./public/index.html');

const history = createHistory();

const store = configureStore(
  history,
  window.__INITIAL_STATE__
);

ReactDOM.render(
  <Provider store={store} key="provider">
    <ConnectedRouter
      history={history}
    >
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
