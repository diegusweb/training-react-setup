import React from 'react';
import { render } from 'react-dom';
//import TestMessage from './components/TestMessage';
import style from '../styles/main.scss';

const App = () => <h1>Blog test React</h1>

render(
    <App/>,
    document.getElementById('app')
)
