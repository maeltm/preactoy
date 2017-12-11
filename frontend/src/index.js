import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root'); 
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), rootElement);
registerServiceWorker();
