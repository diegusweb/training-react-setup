import React from 'react';
import { shallow } from '../app/enzyme.js';
import List from '../app/components/List.jsx';

describe('List', () => {
    let list;

    beforeEach(() => {
        list = shallow(<List data={['test 1', 'test 2', 'test 3', 'test 4']} />);
    });

    it('Class of rendered table', () => {
        expect(list.find('.testClass').length).toEqual(1);
    });

    it('List renders table', () => {
        expect(list.find('table').length).toEqual(1);
    });

    it('List renders count data', () => {
        const arr = list.find('td');
        expect(arr.length).toEqual(4);
    });

    it('List renders column', () => {
        const arr = list.find('th');
        expect(arr.length).toEqual(1);
        expect(arr.first().text()).toEqual('Name');
     });

     it('List renders data', () => {
        const arr = list.find('td');
        expect(arr.length).toEqual(4);
        expect(arr.at(3).text()).toEqual('test 4');
    });
})
