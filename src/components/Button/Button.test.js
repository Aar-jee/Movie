import React from 'react';
import ReactDOM from 'react-dom';
import App from './Button';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('sums numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
});

it('multiply numbers', () => {
    expect(1 * 2).toEqual(2);
    expect(2 * 2).toEqual(4);
});

it('sums numbers1', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
});

it('multiply numbers2', () => {
    expect(1 * 2).toEqual(2);
    expect(2 * 2).toEqual(4);
});

it('multiply numbers33', () => {
    expect(1 * 2).toEqual(2);
    expect(2 * 2).toEqual(4);
});

it('sums numbers155', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
});

it('multiply numbers2774', () => {
    expect(1 * 2).toEqual(2);
    expect(2 * 2).toEqual(4);
});