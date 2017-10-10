import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'App/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { store } from 'myRedux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
