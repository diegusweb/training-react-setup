import React from 'react';
import { render } from '../app/enzyme.js';
import Welcome from '../app/components/welcome.jsx';

describe('Welcome', () => {
  it('Welcome renders Training React 2018', () => {
    const welcome = render(<Welcome />);
    expect(welcome.find('h3').text()).toEqual('Training React 2018');
  });
});
