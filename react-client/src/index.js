import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Router, Route, hasHistory} from "react-router";
import {Provider} from "react-redux";
import App from "./containers/App";
import About from './containers/About';
import demo from "./reducers/users";

let store = createStore(demo);

render(
    <Provider store={store}>
        <Router history={hasHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>
    </Provider>,
    document.getElementById('app'));