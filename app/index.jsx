import React from 'react';
import { render } from 'react-dom';

import './main.scss';

const App = () => {
  return (
    <div>
      <h3>Training React 2018</h3>
      <p>This page is a demo.</p>
    </div>
  );
}

render(<App />, document.getElementById('app'));
