import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import AuthRoute from './component/authroute/authroute';
import Login from './component/login/login';
import Register from './component/register/register.js';
import reducers from './reducer';
import './config';
import './index.css';
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtention ? window.devToolsExtention() : f=>f
    //window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null
)); 
// let store = process.env.NODE_ENV === 'production' ? (
//     createStore(reducers, applyMiddleware(thunk))
// ) : (
//     window.__REDUX_DEVTOOLS_EXTENSION__ ? (
//         createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))
//     ) : (
//         createStore(reducers, applyMiddleware(thunk))
//     )
// )

function Boss(){
    return <h2>boss</h2>
}
ReactDom.render(
    (<Provider  store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
