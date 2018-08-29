import React from 'react';
import ReactDOM  from 'react-dom';
import Welcome from './components/welcome.jsx';
import { AppContainer } from 'react-hot-loader';
import './main.scss';

const element = <Welcome />;

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Welcome/>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/welcome.jsx', render);
}
