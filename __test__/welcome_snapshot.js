
import React from 'react';
import expect from 'expect';
import renderer from 'react-test-renderer';
import Welcome from '../app/components/welcome.jsx';

describe('Welcome (Snapshot)', () => {
  it('Welcome snapshpot Training React 2018', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
});
});
