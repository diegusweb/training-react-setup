import React from 'react';
import { render } from 'react-dom';
import Welcome from './components/welcome.jsx'
import './main.scss';

const element = <Welcome />;

render(element, document.getElementById('app'));
