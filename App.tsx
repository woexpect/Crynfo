import React from 'react';
// Redux connection
import {Provider} from 'react-redux';
import store from './src/redux/store';
// Application's main router
import Router from './src/navigation/Router';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
