import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './store/Auth'
import { Provider } from 'mobx-react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

const stores = {
  Auth,
};

ReactDOM.render(
    <BrowserRouter>
      <Provider {...stores}>
        <Route
          render={({ history }) => <App history={history} />}
        />
      </Provider>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
