import React from 'react';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Menu />
            <Switch>
            <Route path="/home"  component= {Home} /> 
            <Route path="/login" component= {Login} /> 
            <Route path="/register" component= {Register} /> 
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;