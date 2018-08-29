import React from 'react';
import expect from 'expect';
import { shallow } from '../app/enzyme.js';
import Welcome from '../app/components/welcome.jsx';

describe('Welcome', () => {
    let welcome;

     beforeEach(() => {
       welcome = shallow(<Welcome />);
   });

  it('Welcome renders Training React 2018', () => {
      expect(welcome.find('h3').text()).toEqual('Training React 2018');
  });

  it('Welcome renders nested components', () => {
    expect(welcome.find('h3').length).toEqual(1);
    expect(welcome.find('p').length).toEqual(1);
  });

});
