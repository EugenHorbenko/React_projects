import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
} from 'react-router-dom'; /* для Gitgub-pages используем HashRouter вместо BrowserRouter */
import App from './components/App';

ReactDOM.render(
  <HashRouter basename="/">
    <Route>
      <App />
    </Route>
  </HashRouter>,
  document.querySelector('#root'),
);
