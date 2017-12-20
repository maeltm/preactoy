import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './baseball/Game';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
ReactDOM.render((
    <BrowserRouter>
        <Game />
    </BrowserRouter>), rootElement);
registerServiceWorker();
