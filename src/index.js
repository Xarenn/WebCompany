import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers/Reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(
    reducers,
    compose(applyMiddleware(thunk, promise), devToolsEnhancer()
));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
