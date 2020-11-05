import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './containers/home';

const App = () => (
    <div className="main-container">
        <Home />
    </div>
)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

