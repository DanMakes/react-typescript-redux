import { hot } from 'react-hot-loader/root';
import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import { Provider } from 'react-redux';

import MainNavigatin from 'Navigation';
import store from 'Store';
import 'Styles/main.scss';


const App: React.FunctionComponent = () => {
  return(
    <AppContainer>
      <Provider store={ store }>
        <MainNavigatin />
      </Provider>
    </AppContainer>
  );
};

export default hot(App);
