import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store'
ReactDOM.render(
<Provider store={store}>
<HashRouter>
<App/>
</HashRouter>
</Provider>
,document.getElementById('root'));

