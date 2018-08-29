import React from 'react';
import { render } from 'react-dom';
import Welcome from './components/welcome.jsx';
import { AppContainer } from 'react-hot-loader';
import './main.scss';

const element = <Welcome />;

render(
    <AppContainer>
      <Welcome/>
    </AppContainer>,
     document.getElementById('app'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/welcome.jsx', render);
}
