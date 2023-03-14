import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/index.scss';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
