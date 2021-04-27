import React, { Fragment } from 'react';
import { Route,Switch,BrowserRouter } from "react-router-dom"
import Home from './home';
import Register from './register';
import Login from './login';


// To do private route to access the new bet page !

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={props => <Home/>}/>
                <Route exact path="/login" render={props => <Login/>}/>
                <Route exact path="/register" render={props => <Register/>}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;